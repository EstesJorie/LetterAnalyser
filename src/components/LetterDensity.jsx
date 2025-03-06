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

    const letterCount = countLetters(text);
 const letterDensity = text.toUpperCase().split("").reduce((acc, letter) => {
        if (letter.match(/[A-Z]/)) {
            acc[letter] = (acc[letter] || 0) + 1;
        }
        return acc;
    }, {});

    return (
        <div>
            <div id="count-page">
              <div id="letter-count" className='text-2xl'>
                <h1>Letter Density</h1>
              </div>
              <div id="letter-density">
                <table>
                  <tbody>
                    {Object.entries(letterDensity).map(([letter, count]) => (
                      <tr key={letter} >
                        <td>{letter}</td>
                        <td className="pr-4">{count}</td>
                        <td>{((count / letterCount) * 100).toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    );
}

export default LetterDensity;