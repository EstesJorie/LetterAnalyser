import React, { useState } from 'react';


const LetterDensity = ({ text }) => {
    const [textValue, setTextValue] = useState("");
    /* const [showCountPage, setShowCountPage] = useState(false); */ //no longer needed

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    /*const displayText = () => {
        if (textValue !== "") { //if text box is not empty
            setShowCountPage(true);
        } else {
            alert("Please enter some text.");
        }
    }; */ //no longer needed

    const countLetters = (str) => { //str as input, returns number of letters present (removes non-alphabetic characters, replaces with blank)
        return str.replace(/[^a-zA-Z]/g, "").length;
    };

    const letterCount = countLetters(text); //stores count of letters
    const letterDensity = text.toUpperCase().split("").reduce((acc, letter) => { //map each letter to frequency of occurence in textbox
        if (letter.match(/[A-Z]/)) {
            acc[letter] = (acc[letter] || 0) + 1;
        }
        return acc;
    }, {});

    const sortedLetterDensity = Object.entries(letterDensity).sort((a, b) => b[1] - a[1]); //sorts letter density in descending order

    return (
        <div>
            <div id="count-page">
              <div id="letter-count" className='text-3xl font-semibold px-2 scifi'>
                <h1>Letter Density</h1>
              </div>
              <div id="letter-density">
                <table>
                  <tbody>
                    {sortedLetterDensity.map(([letter, count]) => (
                      <tr key={letter} >
                        <td className='pr-4'>{letter}</td>
                        <td className="pr-4">{count}</td>
                        <td className='pr-4'>{((count / letterCount) * 100).toFixed(2)}%</td>
                        <td className='w-full'><div className="w-full  rounded-full h-4 flex items-center">
                              <div
                                className="bg-gradient-to-r from-cyan-200 to-purple-400 h-4 rounded-sm transition-all duration-500 ease-in-out flex items-center justify-end pr-1"
                                style={{ width: `${(count/letterCount)*100}%` }}
                              >
                                {(count/letterCount)*100 > 5 && (
                                  <span className="text-xs text-white font-semibold">
                                    {((count/letterCount)*100).toFixed(0)}%
                                  </span>
                                )}
                              </div>
                            </div></td>
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