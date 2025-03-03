import React, { useState } from 'react'
import TextGrabber from '../components/textbox'
import ExampleAnalyser from '../components/exampleanalyser'

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
    </>
  );
}
export default App
