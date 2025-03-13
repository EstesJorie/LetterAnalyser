import React from 'react'

export default function Counts({text}) {
  
    const input = text

    let threedot = input.match(/\.\.\./g) ? input.match(/\.\.\./g).length : 0 // Find number of ellipses in string
    let webCount = input.match(/(\w+)\.(\w+)/g) ? input.match(/(\w+)\.(\w+)/g).length : 0// Find number of websites in string
    let stopCount = input.match(/\w+[.!?]/g) ? input.match(/\w+[.!?]/g).length - webCount - threedot : 0 // Find number of stops in string

    // Checks length of string if you remove any spaces or repeated spaces
    let characterCount = input.replace(/\s+/g, '').length
    let wordCount = 0
    let sentenceCount = 0

    //Checks if there are any website urls, then removes them from the word count if there are
    if ((input.match(/(\w)\.(\w)/g)) == null) {
        wordCount = input.split(/\w+/g).length - 1
    } else {
        wordCount = input.split(/\w+/g).length - (input.match(/(\w)\.(\w)/g).length) -1
    }
      
      // Function to determine if the last characters are a stop or a stop with a space
      function endsWithPunctuation(input) {
        
        return /[.?!]\s$/.test(input) || /[.?!]$/.test(input)
      }
    
    // Checks whether the last characters are a stop or a stop with a space, and then adds an extra sentence 
    if (endsWithPunctuation(input)) {
        sentenceCount = stopCount
    } else if (characterCount > 0) {
        sentenceCount = stopCount + 1
    }
    
    console.log(characterCount, wordCount, stopCount, webCount, threedot)
    
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
