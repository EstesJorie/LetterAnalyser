import React from 'react';

export default function TimCharLimit({ text }) {
    let length = text.length
    const maxCharLimit = 250;

    if (length > maxCharLimit) {
        alert('Text exceeds the character limit.');
    }

    return (
        <div>
            <button>{text}{length}</button>
        </div>
    );
}
