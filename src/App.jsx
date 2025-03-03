import React, { useState } from 'react'
import TextGrabber from '../components/textbox'
import ExampleAnalyser from '../components/exampleanalyser'
import Counts from '../components/counts'

function App() {

  const [text, setText] = useState('');

  return (
    <>
      <Counts />
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
      <input></input>
    </>
  )
}

export default App
