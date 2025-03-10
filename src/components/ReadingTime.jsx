import React from 'react'

export default function ReadingTime({text}) {
    let wordCount = text.length
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    let plural = readingTime === 1 ? "" : "s";

  return (
    <>
        <div className='text-white py-3 px-4 text-center no-underline inline-block text-lg m-1 cursor-pointer border-none rounded'>Approx reading time: {readingTime} minute{plural}</div>
    </>
  )
}

