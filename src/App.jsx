import Counts from './components/counts';
import React, { useState } from 'react';
import TextGrabber from './components/textbox';
import LetterDensity from './components/LetterDensity';
import ReadingTime from './components/ReadingTime';
import CharacterLimit from './components/CharacterLimit';


function App() {
  const [text, setText] = useState('');

  return (
    <>
      <div className='bggradient text-white w-screen min-h-screen px-35 py-5'>
        <div className='mainbox w-full h-full p-5'>
          <TextGrabber setText={setText} />
          <Counts text={text}/>
          <ReadingTime text={text} />
          <CharacterLimit text={text} />
          <LetterDensity text={text} />
        </div>
      </div>
    </>
  );
}

export default App;