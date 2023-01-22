import React, { useState } from 'react';
import './App.css';
import { BiArrowBack } from 'react-icons/bi';
import Button from './components/button/Button';
import ReviewService from './services/ReviewsService';
import SearchPage from './components/pages/SearchPage';
import ResultsPage from './components/pages/ResultsPage';
import Location from './models/Location';
import CohereService from './services/CohereService';
import KeywordService from './services/KeywordsService';
import LoadingPage from './components/pages/LoadingPage';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState([] as Array<any>);
  const [confidenceLevel, setConfidenceLevel] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<Location>({title: "", data_id: "", thumbnail: "", address: "", rating: 0, numReviews: 0, website: ""});

  const pages = [
    <SearchPage setPageNum={setCurrentPage} setSelectedLocation={setSelectedLocation} />,
    <LoadingPage location={selectedLocation} setPageNum={setCurrentPage} setConfidenceLevel={setConfidenceLevel} setCount={setCount}/>,
    <ResultsPage confidence={confidenceLevel} count={count}/>
  ];

  return (
    <div className="App">
      <div className="bg">
        <div className="header">
          {currentPage === 2 && <Button 
            onClick={() => {
              setCurrentPage(0);
              setCount([]);
              setConfidenceLevel("");
              setSelectedLocation({title: "", data_id: "", thumbnail: "", address: "", rating: 0, numReviews: 0, website: ""});
            }}
            child={<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", width: "105px" }}>
              <BiArrowBack />
              Return to Home
            </div>}
            width="105px"
            height="20px"
          />}
        </div>
        <div className="content">
          {pages[currentPage]}
        </div>
      </div>
    </div>
  );
}

export default App;
