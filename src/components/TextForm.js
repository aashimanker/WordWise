import React, { useState } from "react";

export default function TextForm(props) {
  let disabled = true;
 const handleUpclick = () => {
    // console.log("Uppercase was clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleonChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const handleLoclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleSentence = () => {
    const newtext = text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, (i) =>
      i.toUpperCase()
    );
    setText(newtext);
  };
  const handleCapitalize = () => {
    const newtext = text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    setText(newtext);
    props.showAlert("Capitalized","success");
  };
  const handleClearText = () => {
    const newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared","success");
  };
  const handleAlternating = () => {
    const newtext = text
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
      .join("");
    setText(newtext);
    props.showAlert("Alternating text is displayed","success")
  };
  const handleInvert = () => {
    let newtext = text
      .split("")
      .map(function (c) {
        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
      })
      .join("");
    setText(newtext);
    props.showAlert("Inverted Case is displayed","success")
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success")
  };
  const handleExtraSpaces = () => {
    let newtext = text.replace(/\s{2,}/g, " ").trim();
    setText(newtext);
    props.showAlert("Extra Spaces are removed","success")
  };
  const [text, setText] = useState("");
  const stop = /[.!?]/;
  const sentence = text.split(stop);
  const matches = text.match(/[aeiouy]{1,2}/g);
  const matchCount = matches ? matches.length : 0;
  // setText("new text")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
            style={{
              background: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick} disabled = {text.length===0}>
          UPPER CASE
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick}  disabled = {text.length===0}>
          lower case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleSentence} disabled = {text.length===0}>
          Sentence Case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalize} disabled = {text.length===0}>
          Capitalize Case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleAlternating} disabled = {text.length===0}>
          aLtErNaTiNg cAsE
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleInvert} disabled = {text.length===0}>
          InVeRsE CaSe
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearText} disabled = {text.length===0}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} disabled = {text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} disabled = {text.length===0}>
          Remove Extra Spaces
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-success mx-2 my-2"
          disabled = {text.length===0}
        >
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Statistics</h2>
        <ul class="list-group mx-5">
          <li class="list-group-item list-group-item-info">
            Number of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
          </li>
          <li class="list-group-item list-group-item-info">
            Number of characters: {text.length}
          </li>
          <li class="list-group-item list-group-item-info">
            Number of syllabels: {matchCount}{" "}
          </li>
          <li class="list-group-item list-group-item-info">
            Number of sentences: {sentence.length - 1}
          </li>
          <li class="list-group-item list-group-item-info">
            Number of lines: {text.split(/\n/).filter((element)=>{return element.length!==0}).length}
          </li>
          <li class="list-group-item list-group-item-info">
            Minutes to read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}
          </li>
        </ul>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
