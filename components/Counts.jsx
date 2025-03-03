import React from 'react'
import { useState } from 'react'

export default function Counts({text}) {
    const [characterCount, setCharacterCount] = useState()
    const [wordCount, setWordCount] = useState()
    const [sentenceCount, setSentenceCount] = useState()

    const input = text

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
