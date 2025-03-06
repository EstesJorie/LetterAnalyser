import Counts from '../components/counts';
import React, { useState } from 'react';
import TextGrabber from '../components/textbox';
import LetterDensity from '../components/LetterDensity';
import ReadingTime from '../components/readingtime';


function App() {
  const [text, setText] = useState('');

  return (
    <>
    <div className='bggradient text-white w-screen h-screen px-35 py-5'>
      <div className='mainbox w-full h-full p-5'>
        <TextGrabber setText={setText} />
        <Counts text={text}/>
        <LetterDensity text={text} />
        <ReadingTime text={text} />

      </div>
    </div>
    </>
  );
}

export default App;