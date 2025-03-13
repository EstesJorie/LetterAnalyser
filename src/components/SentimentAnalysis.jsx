import React from 'react'
import Sentiment from 'sentiment';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PosOrNeg(value) {
    if (value > 0) {
        return (
            <a className="text-green-400">Positive</a>
        );
    }
    if (value < 0) {
        return (
            <a className='text-red-400'>Negative</a>
        );
    }
    return (
        <a className='text-[#4882ff]'>Neutral</a>
    );
}

export default function AnalyseSentiment({ text }) {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);

    const positiveCount = result.positive.length || 0.1; // Prevent empty chart
    const negativeCount = result.negative.length || 0.1; // Prevent empty chart

    const data = {
        labels: ['Positive', 'Negative'],
        datasets: [
            {
                data: [positiveCount, negativeCount],
                backgroundColor: ['#4CAF50', '#F44336'],
                borderColor: ['#66BB6A', '#EF5350'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                    font: {
                        size: 14
                    }
                }
            }
        }
    };

    const hasLetters = /[a-zA-Z]/.test(text);

    return (
        <div>
            <div id="sentiment" className='text-3xl font-semibold px-2 scifi'>
                        <h1>Sentiment Analysis</h1>
                    </div>
            {hasLetters && (
                <>
                    <div>
                        <p className='font-semibold'>Sentiment: <a className='underline'>{PosOrNeg(result.score)}</a></p>
                        <p>Score: <a className='text-[#E0E0E0]'>{result.comparative}</a></p>
                        <p className='mono text-green-400'>{result.positive.join(' ')}</p>
                        <p className='mono text-red-400'>{result.negative.join(' ')}</p>
                    </div>
                    <div className='relative h-64 w-64 mx-auto mt-4'>
                        <Pie 
                            data={data} 
                            options={options}
                            width={400}
                            height={400}
                        />
                    </div>
                </>
            )}
        </div>
    );
}