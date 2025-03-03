import React, { useState } from 'react'
import TextGrabber from '../components/textbox'
import ExampleAnalyser from '../components/exampleanalyser'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('');

  return (
    <>
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
      <input></input>
    </>
  )
}

export default App
