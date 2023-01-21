import React, { useState } from 'react';
import './App.css';
import { BiArrowBack } from 'react-icons/bi';
import Button from './components/button/Button';
import ReviewService from './services/ReviewsService';

function App() {
  const reviewService = ReviewService();
  return (
    <div className="App">
      <div className="bg">
        <div className="header">
          <Button 
            onClick={() => {
              const _reviews = reviewService.getReviewsFromID("4");
            }}
            child={<BiArrowBack />}
            width="30px"
            height="30px"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
