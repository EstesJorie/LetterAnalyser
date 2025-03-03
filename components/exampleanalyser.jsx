import React from 'react'

export default function ExampleAnalyser({ text }) {
    return (
        <div>
            <p>{text || "no text"}</p>
        </div>
    )
}