import React, { useState } from 'react'
import TextGrabber from '../components/textbox'
import ExampleAnalyser from '../components/exampleanalyser'

import Counts from '../components/counts'


function App() {
  const [text, setText] = useState('');

  return (
    <div className='bggradient text-white w-screen h-screen px-35 py-5'>
      <div className='mainbox w-full h-full'>
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
      <Counts />
      <input></input>
      </div>
    </div>
  )
}
export default App
