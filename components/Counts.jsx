import React from 'react'
import { useState } from 'react'

export default function Counts({text}) {
  
    const input = text

    let length = input.length
    let spaceCount = input.split(" ").length - 1
    let stopCount = input.split(".").length - 1

    let characterCount = length - spaceCount
    let wordCount = spaceCount + stopCount
    let sentenceCount = stopCount

    if (stopCount == 0 && characterCount > 0) {
        wordCount += 1
    }

    if (sentenceCount == 0 && characterCount > 0) {
        sentenceCount = 1
    }

    console.log(characterCount, wordCount, sentenceCount)
    
  return (
    <>
        <div className='flex items-center justify-center gap-5 p-4'>
            <div className='bg-[#D4A1FB] w-1/3 h-20 rounded flex-col text-white'>
                <span>{characterCount}</span>
                <span className='align-bottom'>Character Count</span>
            </div>

            <div className='bg-[#FFA001] w-1/3 h-20 rounded flex-col text-white'>
                <span>{wordCount}</span>
                <span className='align-bottom'>Word Count</span>
            </div>
            
            <div className='bg-[#FE8159] w-1/3 h-20 rounded flex-col text-white'>
                <span>{sentenceCount}</span>
                <span className='align-bottom'>Sentence Count</span>
            </div>
        </div>
    </>
  )
}
