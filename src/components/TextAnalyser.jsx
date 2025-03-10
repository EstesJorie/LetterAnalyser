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
      <div className='bggradient text-white w-screen min-h-screen px-4 py-5 sm:px-6 md:px-10 lg:px-20'>
        <div className='mainbox w-full h-full p-5'>
          <h1 className='text-5xl font-bold px-2 pt-5 pb-5 text-left'>Text Analyser</h1>
          <p className='text-lg text-left px-2 pb-5'>A simple text analyser that provides the user with statistics on their inputted text, in real-time.</p>
          <TextGrabber setText={setText} />
          <Counts text={text}/>
          <div className="flex flex-col md:flex-row flex-auto pr-0 md:pr-10">
            <ReadingTime text={text} />
            <div className='ml-auto'>
              <TimCharLimit text={text} />
            </div>
          </div>
          <LetterDensity text={text} />
        </div>
      </div>
    </>
  );
}

export default TextAanlyser;