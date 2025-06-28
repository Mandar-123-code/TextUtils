import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const escapedHighlight = highlight.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"); // escape regex special chars
    const regex = new RegExp(`(${escapedHighlight})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };

  return (
    <>
      <div className="container" style={props.mystyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={props.mystyle}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Type your text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUppercaseClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleLowercaseClick}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraspaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().split(/\s+/).filter(Boolean).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes to read</p>

        <h3>Live Preview with Highlighting</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getHighlightedText(text, props.searchText),
          }}
          style={{ whiteSpace: "pre-wrap" }}
        ></p>
      </div>
    </>
  );
}
