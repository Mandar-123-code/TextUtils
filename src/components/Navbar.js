import PropTypes from "prop-types";
import { useState } from "react";

export default function Navbar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchInput); // ✅ Correct function name
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mystyle.backgroundColor} bg-${props.mystyle.backgroundColor}`}
      style={props.mystyle}
    >
      <div className="container-fluid" style={props.mystyle}>
        <a className="navbar-brand" href="/" style={props.mystyle}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={props.mystyle}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={props.mystyle}>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={props.mystyle}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="/" style={props.mystyle}>
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search text to highlight in the preview"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          {/* Move the mode toggle button outside the collapsible section */}
          <div
            className={`form-check form-switch mx-2 text-${
              props.mystyle.backgroundColor === "black" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.togglestyle}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={props.mystyle}
            >
              {props.btntext}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About text here",
};
