import React, { useState } from 'react';

const LetterDensity = ({ text }) => {
    const [textValue, setTextValue] = useState("");
    const [showCountPage, setShowCountPage] = useState(false);

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const displayText = () => {
        if (textValue !== "") { //if text box is not empty
            setShowCountPage(true);
        } else {
            alert("Please enter some text.");
        }
    };

    const countLetters = (str) => {
        return str.replace(/[^a-zA-Z]/g, "").length;
    };

    const letterCount = countLetters(textValue);
    const letterDensity = textValue.split("").reduce((acc, letter) => {
        if (letter.match(/[a-zA-Z]/)) {
            acc[letter] = (acc[letter] || 0) + 1;
        }
        return acc;
    }, {});

    return (
        <div>
          {!showCountPage ? (
            <div id="input-page">
              <textarea id="text" value={textValue} onChange={handleTextChange}></textarea>
              <button onClick={displayText}>Submit</button>
            </div>
          ) : (
            <div id="count-page">
              <div id="display-text">{textValue}</div>
              <div id="letter-count">
                <h1>Letters Counted: {letterCount}</h1>
              </div>
              <div id="letter-density">
                <h1>Letter Density:</h1>
                <table>
                  <tbody>
                    {Object.entries(letterDensity).map(([letter, count]) => (
                      <tr key={letter}>
                        <td>{letter}</td>
                        <td>{count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
    );
}

export default LetterDensity;