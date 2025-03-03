<<<<<<< HEAD
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
=======
import { useState } from 'react'
import Counts from '../components/counts'

function App() {


  return (
    <>
      <Counts />
>>>>>>> 645dd5ace4d7f792e06f2bc44012b1f6b4cb8e7e
      <input></input>
    </>
  )
}

export default App
