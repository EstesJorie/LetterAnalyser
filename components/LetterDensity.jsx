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

    const countWords = (str) => {
        return str.split(" ").length;
    };

    const wordCount = countWords(textValue);
    const wordDensity = textValue.split(" ").reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
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
              <div id="word-count">
                <h1>Words Counted: {wordCount}</h1>
              </div>
              <div id="word-density">
                <h1>Word Density:</h1>
                <table>
                  <tbody>
                    {Object.entries(wordDensity).map(([word, count]) => (
                      <tr key={word}>
                        <td>{word}</td>
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