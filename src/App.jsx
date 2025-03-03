import React, { useState } from 'react'
import TextGrabber from '../components/textbox'
import ExampleAnalyser from '../components/exampleanalyser'
<<<<<<< HEAD
import Counts from '../components/counts'

function App() {

  const [text, setText] = useState('');

  return (
    <>
      <Counts />
=======

function App() {
  const [text, setText] = useState('');

  return (
    <div className='bggradient text-white w-screen h-screen px-35 py-5'>
      <div className='mainbox w-full h-full'>
>>>>>>> e515f1f360404f027ca1e8e9a61f27ac8057440a
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
      <input></input>
      </div>
    </div>
  )
}
export default App
