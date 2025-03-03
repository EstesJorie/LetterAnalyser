import React, { useState } from 'react'
import TextGrabber from '../components/textbox'
import ExampleAnalyser from '../components/exampleanalyser'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('');

  return (
    <div className='bggradient text-white w-screen h-screen px-35 py-5'>
      <div className='mainbox w-full h-full'>
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
      <input></input>
      </div>
    </div>
  )
}

export default App
