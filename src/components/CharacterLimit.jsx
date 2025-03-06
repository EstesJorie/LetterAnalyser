import React from 'react';
import { useStore } from './TextAnalyser'; // Adjust the import path as necessary

export default function CharacterLimit() {
    const { text } = useStore();
    const maxCharLimit = 250;

    const handleClick = () => {
        const inputText = text;
        if (inputText && inputText.length <= maxCharLimit) {
            alert('Text is within the character limit.');
        } else {
            alert('Text exceeds the character limit.');
        }
    };

    return (
        <div>
            <button 
                className="text-white py-3 px-8 text-center no-underline inline-block text-lg m-1 cursor-pointer border-none rounded"
                onClick={handleClick}
            >
                Set Character Limit
            </button>
        </div>
    );
}
