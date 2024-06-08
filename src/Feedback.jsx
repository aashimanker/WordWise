// Feedback.js
import React, { useState } from 'react';

const Feedback = (props) => {
    const [feedback, setFeedback] = useState('');
    
    const submitFeedback = () => {
        // Assuming you are using fetch for making the POST request
        fetch('http://localhost:3000/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        })
        .then(response => response.text())
        .then(message => console.log(message))
        
        setFeedback('');
        props.showAlert("Feedback sent successfully","success");
        
    };

    return (
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h2 >Feedback Form</h2>
            <textarea
             className="form-control"
                rows="8"
                cols="50"
                placeholder="Enter your feedback here"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                style={{
                    background: props.mode === "light" ? "white" : "#13466e",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
            />
            <br />
            <button onClick={submitFeedback} className="btn btn-success mx-2 my-2"
          disabled = {feedback.length===0}>Submit Feedback</button>
        </div>
    );
};

export default Feedback;
