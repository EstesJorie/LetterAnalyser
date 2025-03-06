import React, { useState } from 'react';
import TextGrabber from '../components/textbox';
import ExampleAnalyser from '../components/exampleanalyser';
import LetterDensity from '../components/LetterDensity';

import Counts from '../components/counts'


function App() {
  const [text, setText] = useState('');

  return (
    <div className='bggradient text-white w-screen h-screen px-35 py-5'>
      <div className='mainbox w-full h-full'>
<<<<<<< HEAD
      <TextGrabber setText={setText} />
      <ExampleAnalyser text={text} />
      <Counts />
      <input></input>
=======
        <TextGrabber setText={setText} />
        <ExampleAnalyser text={text} />
        <LetterDensity text={text} />
>>>>>>> a707e45d372f26938c4b42bff36fd2cfe4e565b7
      </div>
    </div>
  );
}

export default App;