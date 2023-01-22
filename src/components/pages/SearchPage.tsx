import React, { useState } from 'react';
import Location from '../../models/Location';
import Loading from '../loading/Loading';
import SearchBar from '../searchbar/SearchBar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SearchPage.css';
import Button from '../button/Button';
import { CgWebsite } from 'react-icons/cg';
import no_img from '../../images/no-image.png';
import { HiOutlineArrowRight } from 'react-icons/hi';
import ReviewService from '../../services/ReviewsService';

interface SearchPageProps {
  setPageNum: (value: number) => void,
  setSelectedLocation: (value: Location) => void
}

const SearchPage = ({ setPageNum, setSelectedLocation }: SearchPageProps) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [slideAway, setSlideAway] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selected, setSelected] = useState(false);
  const nullLocation = {title: "", data_id: "", thumbnail: "", address: "", rating: 0, numReviews: 0, website: ""};
  const dummyData: Location[] = [nullLocation, nullLocation, nullLocation, nullLocation, nullLocation];
  const [rendered, setRendered] = useState(false);

  const reviewService = ReviewService();

  const addDefaultSrc = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = no_img;
  };

  const locationSelect = (location: Location) => {
    setSelectedLocation(location);
    setSearchWithSelected(location.title, true);
  };

  const setSearchWithSelected = (value: string, sel: boolean) => {
    setRendered(true);
    setSearch(value);
    setSelected(sel);
    getSearchResults(value);
  };

  const getSearchResults = async (search: string) => {
    setLoading(true);
    const _locations = await reviewService.getLocation(search);
    setLocations(_locations);
    setLoading(false);
  };

  return (
    <div className={`searchpg-wrapper ${slideAway ? "slide-out" : ""}`}>
      <div className={
        `title ${!rendered ? "appear-title" : ""} ${(search.length > 0 && !selected) ? "title-condensed" : ""}`
      }>
        consensus
      </div>
      <div className={`${!rendered ? "appear-searchbar" : ""}`}>
        <SearchBar 
          width="50vw"
          height="30px"
          fontSize="20px"
          value={search}
          setValue={(value) => {
            setSearchWithSelected(value, false);
            setSelectedLocation(nullLocation);
          }}
        />
      </div>
      <div 
        className={`hotels-list`}
        style={{ opacity: `${(search.length > 0 && !selected) ? "1" : "0" }`, 
                height: `${(search.length > 0 && !selected) ? "60vh" : "0px" }`,
                overflow: `${(search.length > 0 && !selected) ? "auto" : "hidden" }` }}
      >
        <ul className="locations-wrapper">
        {
          (loading ? dummyData : locations).map((location: Location, index) => (
            <div className="loc-card" key={location.data_id.length > 0 ? location.data_id : index} onClick={() => locationSelect(location)}>
              <div className="loc-card-left">
                {loading ? <Skeleton width={"10vh"} height={"10vh"}/> : <img src={location.thumbnail || no_img} onError={addDefaultSrc} alt="new"/>}
                <div className="loc-card-title-wrapper">
                  <div>
                    <h4 className="loc-card-title" style={{ fontSize: "20px" }}>
                      {loading ? <Skeleton width={"20vh"}/> : location.title}
                    </h4>
                    <p style={{ fontSize: "12px"}}>{loading ? <Skeleton width={"20vh"}/> : location.address}</p>
                  </div>
                  <p style={{ fontSize: "12px"}}>{loading ? <Skeleton width={"20vh"}/> : `Rating: ${location.rating}(${location.numReviews})`}</p>
                </div>
              </div>
              <div className="loc-card-right">
                {loading ? <Skeleton width={20} height={20}/> : <Button 
                  child={<CgWebsite />}
                  width="20px"
                  height="20px"
                  onClick={() => {
                    window.open(location.website, '_blank', 'noreferrer');
                  }}
                />}
              </div>
            </div>
          ))
        }
        </ul>
      </div>
      {selected && <div className="next-btn">
        <Button 
          onClick={() => {
            setSlideAway(true);
            setTimeout(() => {
              setPageNum(1)
            }, 1200);
          }}
          child={<div style={{ fontSize: "18px" }} className="flex-row">
            <div style={{ marginRight: "5px" }}>Next</div>
            <HiOutlineArrowRight />
          </div>}
          width="70px"
          height='20px'
        />
      </div>}
    </div>
  );
};

export default SearchPage;