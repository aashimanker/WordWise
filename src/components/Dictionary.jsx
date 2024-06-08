import React, { useState, useEffect } from 'react';

const Dictionary = (props) => {
  const [word, setWord] = useState('');
  const [dictionaryData, setDictionaryData] = useState(null);

  const isSingleWord = (input) => /^[a-zA-Z]+$/.test(input);

  const handleSearch = () => {
    // Validate if the entered value is a single word
    if (!isSingleWord(word)) {
      props.showAlert('Please enter only a single word.',"warning");
      return;
    }

    // Perform the API call when the search button is clicked
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Store the data in the state
        setDictionaryData(data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Fetch error:', error);
      });
  };

  // Trigger search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Automatically update on word change
  useEffect(() => {
    if (word !== '') {
      handleSearch();
    }
  }, [word]);

  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
      // Prevent the default behavior (new line in the textarea)
      event.preventDefault();
      // You can add any other logic here if needed
    }
  };
  return (
    <div className="container mt-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Word Lookup</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: props.mode === "light" ? "white" : "#13466e",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      

      {dictionaryData && (
        <>
          <h2 className="mt-4 mb-4">{word}</h2>
          <p className="mb-2">Phonetics: {dictionaryData[0]?.phonetics[0]?.text}</p>
          {dictionaryData[0]?.phonetics[0]?.audio && (
            <audio controls className="mb-3">
              <source src={dictionaryData[0].phonetics[0].audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          {dictionaryData[0]?.origin && (
            <p className="mb-2">Origin: {dictionaryData[0]?.origin}</p>
          )}
          <h3 className="mb-3">Meanings:</h3>
          <ul className="list-group">
            {dictionaryData[0]?.meanings.map((meaning, index) => (
              <li key={index} className="list-group-item">
                <p className="mb-1">Part of speech: {meaning.partOfSpeech}</p>
                <p className="mb-1">Definition: {meaning.definitions[0]?.definition}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dictionary;
