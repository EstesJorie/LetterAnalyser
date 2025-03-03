import React, { useState } from 'react'

const LetterDensity = ({ initialText = ""}) => {
    const inputPage = document.getElementById("input-page");
    const countPage = document.getElementById("count-page");
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const text = document.getElementById("text")

    const [textValue, setTextValue] = useState(initialText);
    const [wordCount, setWordCount] = useState(0);
    const [wordDensity, setWordDensity] = useState({});
    const [showCountPage, setShowCountPage] = useState(false);

    console.log(text, textValue);


    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const displayText = () => {
        if (text.value !== "") { //if text box is not empty
            inputPage.style.display = "none";
            document.getElementById("display-text").innerText = textValue;
            countPage.style.display = "block";
        }
        else {
            alert("Please enter some text.")
        }
    };

    const countWords = (str) => {
        return str.split(" ").length;
    };

    const getWordDensity = (str) => {
        let wordList = {};
        str.split(/[\s\.,]+/).forEach(word => {
          if (typeof wordList[word] === "undefined") {
            wordList[word] = 1;
          } else {
            wordList[word]++;
          }
        });
        return wordList;
      };


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
                  {Object.entries(wordDensity).map(([word, count]) => (
                    <tr key={word}>
                      <td>{word}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}
        </div>
      );
}

export default LetterDensity;


