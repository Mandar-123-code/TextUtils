import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState, useEffect } from "react";

function App() {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtntext] = useState("Enable Dark Mode");
  const [searchText, setSearchText] = useState("");

  // Toggle the mode between light and dark
  const togglestyle = () => {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntext("Enable Light Mode");
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Enable Dark Mode");
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mystyle.backgroundColor;
    document.body.style.color = mystyle.color;
  }, [mystyle]);

  // Update the search text from Navbar.jsx
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        btntext={btntext}
        mystyle={mystyle}
        togglestyle={togglestyle}
        onSearch={handleSearch}
      />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mystyle={mystyle}
          togglestyle={togglestyle}
          btntext={btntext}
          searchText={searchText}
        />
      </div>
    </>
  );
}

export default App;
