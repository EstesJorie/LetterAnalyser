import Counts from './Counts';
import React from 'react';
import TextGrabber from './textbox';
import LetterDensity from './LetterDensity';
import ReadingTime from './ReadingTime';
import { create } from 'zustand';
import TimCharLimit from './TimCharLimit';

export const useStore = create(set => ({
  text: '',
  setText: (newText) => set({ text: newText })
}));

function TextAanlyser() {
  const { text, setText } = useStore();

  return (
    <>
      <div className='bggradient text-white w-screen min-h-screen px-35 py-5'>
        <div className='mainbox w-full h-full p-5'>
          <TextGrabber setText={setText} />
          <Counts text={text}/>
          <div className="flex flex-auto pr-10">
            <ReadingTime text={text} />
            <TimCharLimit text={text} />
          </div>
          <LetterDensity text={text} />
        </div>
      </div>
    </>
  );
}

export default TextAanlyser;