import React, { useState, useEffect } from 'react';

export default function TimCharLimit({ text }) {
    const [isCharLimitActive, setIsCharLimitActive] = useState(false);
    const [labelText, setLabelText] = useState('Set Character Limit');
    const maxCharLimit = 3000;

    const handleCheckboxChange = () => {
        setIsCharLimitActive(!isCharLimitActive);
        setLabelText(!isCharLimitActive ? 'Remove Character Limit' : 'Set Character Limit');
    };

    useEffect(() => {
        console.log(`Character limit is ${isCharLimitActive ? 'active' : 'inactive'}`);
    }, [isCharLimitActive]);

    if (isCharLimitActive && text.length > maxCharLimit) {
        alert('Text exceeds the character limit.');
        console.log(`Character limit exceeded by ${text.length - maxCharLimit} characters`);
    }

    const id = "charLimitCheckbox"; 

    return (
        <div>
            <div className="gap-2 items-center">
                <input
                    type="checkbox"
                    id={id}
                    checked={isCharLimitActive}
                    onChange={handleCheckboxChange}
                    className="
                        
                        h-0 w-0
                    "/>
                <label
                    htmlFor={id}
                    className={`
                        text-white mono py-3 px-4 text-center no-underline inline-block text-lg m-1 cursor-pointer border-none rounded-full
                        ${isCharLimitActive ? 'bg-blue-400 font-bold' : 'hover:bg-sky-500 font-bold'}
                    `}>
                    {labelText}
                </label>
                {isCharLimitActive && (
                    <div className="text-gray-400 text-md pt-2  ml-4">
                        {text.length}/{maxCharLimit}
                    </div>
                )}
            </div>
        </div>
    );
}