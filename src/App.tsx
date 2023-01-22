import React, { useState } from 'react';
import './App.css';
import { BiArrowBack } from 'react-icons/bi';
import Button from './components/button/Button';
import ReviewService from './services/ReviewsService';
import SearchPage from './components/pages/SearchPage';

function App() {
  const reviewService = ReviewService();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [<SearchPage />];

  return (
    <div className="App">
      <div className="bg">
        <div className="header">
          <Button 
            onClick={async () => {

              const _locations = await reviewService.getLocation("Ritz-hotel");
              console.log(_locations)
            }}
            child={<BiArrowBack />}
            width="30px"
            height="30px"
          />
        </div>
        <div className="content">
          {pages[currentPage]}
        </div>
      </div>
    </div>
  );
}

export default App;
