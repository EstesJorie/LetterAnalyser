import React from 'react';

export default function TimCharLimit({ text }) {
    let length = text.length
    const maxCharLimit = 250;

    if (length > maxCharLimit) {
        alert('Text exceeds the character limit.');
    }

    return (
        <div>
            <button className='text-white py-3 px-4 text-center no-underline inline-block text-lg m-1 cursor-pointer border-none roundeds'>Set Character Limit</button>
        </div>
    );
}
