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
        <div className='flex gap-5 p-4 scifi'>
            <div className='grid bg-[#D4A1FB] w-1/3 h-30 rounded-lg text-[#250040] place-items-center font-bold shaded'>
                <span className='text-6xl'>{characterCount}</span>
                <span className='text-2xl align-bottom'>Character Count</span>
            </div>

            <div className='grid bg-[#FFA001] w-1/3 h-30 rounded-lg text-[#2b1b00] place-items-center font-bold shaded'>
                <span className='text-6xl'>{wordCount}</span>
                <span className='text-2xl align-bottom'>Word Count</span>
            </div>
            
            <div className='grid bg-[#FE8159] w-1/3 h-30 rounded-lg text-[#360f00] place-items-center font-bold shaded'>
                <span className='text-6xl'>{sentenceCount}</span>
                <span className='text-2xl '>Sentence Count</span>
            </div>
        </div>
    </>
  )
}
