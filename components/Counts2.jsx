import React from 'react'
import { useState } from 'react'

export default function Counts2({text}) {


    let length = text.length

    
  return (
    <>

        <div className='bg-blue-500 w-full'>{length}</div>
        <div></div>
        <div></div>

    </>
  )
}
