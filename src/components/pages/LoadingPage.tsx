import React, { useEffect, useState } from 'react';
import Location from '../../models/Location';
import CohereService from '../../services/CohereService';
import KeywordsService from '../../services/KeywordsService';
import ReviewService from '../../services/ReviewsService';
import './LoadingPage.css';

interface LoadingPageProps {
  location: Location,
  setPageNum: (value: number) => void,
  setConfidenceLevel: (value: string) => void,
  setCount: (value: Array<any>) => void
}

const LoadingPage = ({ location, setPageNum, setConfidenceLevel, setCount }: LoadingPageProps) => {
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);
  const reviewService = ReviewService();
  const cohereService = CohereService();
  const keywordsService = KeywordsService();

  const phases = [
    "Fetching Reviews",
    "Analyzing Sentiment",
    "Generating Keywords"
  ];

  useEffect(() => {
    loadData();
  }, [location]);

  const loadData = async () => {
    const _reviews = await reviewService.getReviewsFromID(location);
    const _filtered_reviews = reviewService.filterReviews(_reviews);

    await new Promise(r => setTimeout(r, 1000));

    setPhase(1);

    const confidence = await cohereService.getConfidenceLevels(_filtered_reviews);
    setConfidenceLevel(confidence);

    await new Promise(r => setTimeout(r, 1000));
    setPhase(2);

    const keywords = await keywordsService.getKeywords(_reviews);
    const count = keywordsService.countKeywords(keywords);
    console.log(count);
    setCount(count);
    await new Promise(r => setTimeout(r, 1000));
    setDone(true);

    setTimeout(() => setPageNum(2), 1200);
  };

  return (
    <div className={`loadingpg-wrapper ${done ? "slide-out" : "slide-in"}`}>
      <div className="description-wrapper">
        <div className={`description`}>
          {phases[phase]}
        </div>
      </div>
      <div className='dot-wrapper'>
        <div className="dot-falling"></div>
      </div>
    </div>
  );
};

export default LoadingPage;