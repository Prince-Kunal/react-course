import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    // setText("New Text");

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>Slow Reader: {0.008 * text.split(" ").length} Minutes, Average Reader: {0.004 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
