import React from 'react'
import { useState } from 'react'

export default function Counts({text}) {
    // const [characterCount, setCharacterCount] = useState()
    // const [wordCount, setWordCount] = useState()
    // const [sentenceCount, setSentenceCount] = useState()

    const input = text

    let length = input.length
    let spaceCount = input.split(" ").length - 1

    let stopCount = input.split(".").length - 1

    let characterCount = length - spaceCount
    let wordCount = spaceCount + stopCount
    let sentenceCount = stopCount

    if (stopCount == 0) {
        wordCount += 1
    }

    if (sentenceCount == 0) {
        sentenceCount += 1
    }

    // const Update = () => {
    // setCharacterCount(length - spaceCount)
    // setWordCount(spaceCount + stopCount)
    // setSentenceCount(stopCount)
    // }
    

    
    

    console.log(characterCount, wordCount, sentenceCount)
    
  return (
    <>

        <div className='bg-blue-500 w-full'>{characterCount}</div>
        <div>{wordCount}</div>
        <div>{sentenceCount}</div>

    </>
  )
}
