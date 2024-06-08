import React, { useState } from "react";

export default function About(props) {
  let mystyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'? '#042743':'white',
  } 
  let accordionitem = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'? '#042743':'white',
    border: '2px solid',
    borderColor: props.mode === 'dark'?'white':'balck',
  }
  return (
    <div className="my-2 container" >
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h1>
      <div className="accordion accordion-flush"  id="accordionFlushExample">
        <div className="accordion-item " style={accordionitem} >
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={mystyle}
            >
              <strong>Key Features</strong>
              
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
              <ul>
                <li>
             Intuitive Data Manipulation:
Easily manipulate text with a variety of formatting options. Change fonts, styles, and layouts effortlessly to give your words the perfect look.
</li>
<li>
Smart Data Parsing:
Word Wise goes beyond simple editing. Our advanced parsing technology extracts valuable information from your text, providing insights and enhancing your understanding.
</li>
<li>
Inbuilt Dictionary:
Say goodbye to interruptions in your workflow. Word Wise comes with a comprehensive inbuilt dictionary, ensuring you never miss a beat. Instantly look up meanings, synonyms, and more without leaving the app.
</li>
<li>
Seamless User Interface:
Enjoy a user-friendly interface designed for efficiency. Navigate through features with ease, streamlining your text-related tasks.
</li>
<li>
Enhanced Collaboration:
Collaborate effortlessly with others. Share your formatted text or parsed data seamlessly, fostering effective communication and teamwork.
</li>
</ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionitem}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={mystyle}
            >
              <strong>Why WordWise?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
            Word Wise is more than just an app; it's a dynamic tool that adapts to your needs. Whether you're a writer, student, professional, or anyone who deals with text, Word Wise is tailored to enhance your experience. Here's why users love us:
<ul>
<li>Efficiency Redefined: Save time and effort with our efficient tools that simplify complex tasks.</li>
<li>Versatility: From creative writing to data analysis, Word Wise caters to a wide range of needs.</li>
<li>Constant Innovation: We're committed to staying ahead of the curve. Expect regular updates with new features and improvements.</li>
</ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionitem}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={mystyle}
            >
              <strong>For Writing Improvement</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={mystyle}>
            Writers and bloggers can use the app to analyze their text for readability. By understanding word, character, and syllable counts, they can gauge the complexity of their writing and make adjustments to improve clarity and accessibility.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
