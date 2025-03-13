import React from 'react'
import Sentiment from 'sentiment';

function PosOrNeg(value){
    if (value > 0) {
        return (
            <a className="text-green-400">Positive</a>
        );
    };
    if (value < 0) {
        return (
            <a className='text-red-400'>Negative</a>
        );
    };
    return (
        <a className='text-[#4882ff]'>Neutral</a>
    );
}

export default function AnalyseSentiment({ text }) {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    


    return (
        <div>
            <div id="sentiment" className='text-3xl font-semibold px-2 scifi'>
                <h1>Sentiment Analysis</h1>
            </div>
            <div>
                <p className='font-semibold'>Sentiment: <a className='underline'>{PosOrNeg(result.score)}</a></p>
                <p>Score: <a className='text-[#E0E0E0]'>{result.comparative}</a></p>
                <p className='mono text-green-400'>{result.positive.join(' ')}</p>
                <p className='mono text-red-400'>{result.negative.join(' ')}</p>
            </div>
        </div>
    );
}   