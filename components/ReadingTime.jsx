import React from 'react'

export default function ReadingTime({text}) {
    let wordCount = text.length
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <>
        <div>Reading time: {readingTime} minute.</div>
    </>
  )
}

