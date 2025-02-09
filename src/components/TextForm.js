import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUppercaseClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let UppercaseText = text.toUpperCase();
        setText(UppercaseText)
    }
    const handleLowercaseClick = ()=>{
        console.log("Lowercase was clicked"+text);
        let LowercaseText = text.toLowerCase();
        setText(LowercaseText)
    }
    const handleClearText = ()=>{
        console.log("Lowercase was clicked"+text);
        let ClearText =""
        setText(ClearText)
    }
    const handleCopy =()=>{
        var text  = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
        
    }
    const[text,setText] = useState("");
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p> You require {0.008 *text.split(' ').length} Minutes to read this text </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

