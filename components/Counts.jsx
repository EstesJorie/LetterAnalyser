import React from 'react'
import { useState } from 'react'

export default function Counts(inputs={fakeinput}) {
    const [characterCount, setCharacterCount] = useState()
    const [wordCount, setWordCount] = useState()
    const [sentenceCount, setSentenceCount] = useState()

    const input = "Hello, is this thing working. How many sentences are in here."

    let length = input.length
    let spaceCount = input.split(" ").length - 1

    let stopCount = input.split(".").length - 1

    const Update = () => {
    setCharacterCount(length - spaceCount)
    setWordCount(spaceCount + stopCount)
    setSentenceCount(stopCount)
    }

    
    

    console.log(characterCount, wordCount, sentenceCount)
    
  return (
    <>

        <div className='bg-blue-500 w-full'></div>
        <div></div>
        <div></div>

    </>
  )
}
