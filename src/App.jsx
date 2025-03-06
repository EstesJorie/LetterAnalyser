import Counts from '../components/counts';
import React, { useState } from 'react';
import TextGrabber from '../components/textbox';
import ExampleAnalyser from '../components/exampleanalyser';
import LetterDensity from '../components/LetterDensity';

import Counts from '../components/counts'


function App() {
  const [text, setText] = useState('');

  return (
    <>
      <div className='mainbox w-full h-full p-5'>
        <TextGrabber setText={setText} />
        <ExampleAnalyser text={text} />
        <Counts text={text}/>
        <LetterDensity text={text} />
      </div>
    </>
  );
}

export default App;