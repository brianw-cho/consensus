import React, { useState } from 'react';
import './App.css';
import { BiArrowBack } from 'react-icons/bi';
import Button from './components/button/Button';
import ReviewService from './services/ReviewsService';
import SearchPage from './components/pages/SearchPage';
import PositivePage from './components/pages/PositivePage';
import Location from './models/Location';
import CohereService from './services/CohereService';
import KeywordService from './services/KeywordsService';

function App() {
  const reviewService = ReviewService();
  const cohereService = CohereService();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<Location>({title: "", data_id: "", thumbnail: "", address: "", rating: 0, numReviews: 0, website: ""});

  const pages = [
    <SearchPage setPageNum={setCurrentPage} setSelectedLocation={setSelectedLocation} />,
    <PositivePage />
  ];

  return (
    <div className="App">
      <div className="bg">
        <div className="header">
          <Button 
            onClick={async () => {

              const _locations = await reviewService.getLocation("Ritz-hotel");
              console.log(_locations)
              const _reviews = await reviewService.getReviewsFromID(_locations[0])

              const _filtered_reviews = reviewService.filterReviews(_reviews)

              const _keywords = await KeywordService().getKeywords(_reviews);
              console.log(_keywords)

              const _cohere = await cohereService.getConfidenceLevels(_filtered_reviews)
              console.log(_cohere)
            

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
