import React from 'react'
import { useState } from 'react'

export default function Counts({text}) {
  
    const input = text

    let length = input.length
    let spaceCount = input.split(" ").length - 1
    let ellipses = input.split(/[/./.]/g).length - 1
    let stopCount = input.split(/[.!?]+/g).length - ellipses - 1
    

    let characterCount = length - spaceCount
    let wordCount = 0
    let sentenceCount = 0

    if ((input.match(/(\w)\.(\w)/g)) == null) {
        wordCount = input.split(/\w+/g).length -1
    } else {
        wordCount = input.split(/\w+/g).length - (input.match(/(\w)\.(\w)/g).length) -1
    }

    // if (input.slice(-1) != ('.' || ' ') && characterCount > 0) {
    //     sentenceCount = stopCount + 1
    // } else {
    //     sentenceCount = stopCount
    // }
    
    if ((input.match(/(\w+)\.(\w+)/g)) != null) {
        sentenceCount = stopCount - (input.split(/(\w+)\.(\w+)/g).length -1)
    } else if ((input.slice(-2) == [/\s+[.?!]/g])) {
        sentenceCount = stopCount
    } else if (characterCount > 0) {
        sentenceCount = stopCount + 1
    }
    
    
    // if (input.split(/w+(\.)/g).length -1 > 0) {
    //     sentenceCount = input.split(/w+(\.)/g).length -1
    // }

    
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
