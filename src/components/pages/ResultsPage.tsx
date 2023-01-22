import React, { useState } from 'react';
import LoadingPage from './LoadingPage';
import './ResultsPage.css';

interface ResultsPageProps {
  confidence: string,
  count: Array<any>
}

const ResultsPage = ({ confidence, count }: ResultsPageProps) => {
  const fontColor = confidence === "Positive" ? "#749EB2" : "#BD8E83"
  return (
    <div className="results-wrapper">
      <div className="result-description appear-12">
        Overall sentiment of the reviews were: 
      </div>
      <div className='result-confidence' style={{ color: fontColor }}>
        {confidence}
      </div>
      <div className="result-description appear-2">
        Here are some keywords that appeared frequently:
      </div>
      <div className="result-keywords">
        {count.map((entry, index) => (
          <div 
            key={index}
            className="keyword-bar"
            style={{ 
              width: `${300 * entry[1]}px`, 
              backgroundColor: `${index % 2 == 0 ? "#749EB2" : "#BD8E83"}`
            }}
          >
            {entry[0]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;