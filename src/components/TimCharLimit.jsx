import React, { useState } from 'react';

export default function TimCharLimit({ text }) {
    const [isCharLimitActive, setIsCharLimitActive] = useState(false);
    const maxCharLimit = 250;

    const handleRadioChange = () => {
        setIsCharLimitActive(!isCharLimitActive);
    };

    if (isCharLimitActive && text.length > maxCharLimit) {
        alert('Text exceeds the character limit.');
    }

    const id = "charLimitRadio"; 

    return (
        <div>
            <div className="flex gap-2 items-center">
                <input
                    type="radio"
                    id={id}
                    checked={isCharLimitActive}
                    onChange={handleRadioChange}
                    className="
                        appearance-none
                        h-0 w-0
                    "
                />
                <label
                    htmlFor={id}
                    className="
                        text-white py-3 px-4 text-center no-underline inline-block text-lg m-1 cursor-pointer border-none rounded-full hover:bg-blue-700
                    "
                >
                    Set Character Limit
                </label>
            </div>
        </div>
    );
}