import React from 'react'

export default function ReadingTime({text}) {
    let wordCount = text.length
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    let plural = readingTime === 1 ? "" : "s";

  return (
    <>
<<<<<<< HEAD
        <div>Approx. reading time: {readingTime} minute.</div>
=======
        <div>Approx reading time: {readingTime} minute{plural}</div>
>>>>>>> refs/remotes/origin/main
    </>
  )
}

