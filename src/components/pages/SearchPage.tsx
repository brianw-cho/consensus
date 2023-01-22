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

interface SearchPageProps {

}

const SearchPage = ({}: SearchPageProps) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<Location[]>([
    {
      title: "The Ritz-Carlton, Toronto",
      data_id: "0x882b34d147950583:0xbd204fafb5cdc0d6",
      address: "181 Wellington St W, Toronto, ON M5V 3G7, Canada",
      rating: 4.6,
      numReviews: 2681,
      thumbnail: "https://lh5.googleusercontent.com/p/AF1QipPqLzceI1HpXf2hhjqSWRJb2q6BdUEZgBdPLC53=w86-h129-k-no",
      website: "https://www.ritzcarlton.com/en/hotels/canada/toronto?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
    }
  ]);
  const [selected, setSelected] = useState(false);
  const nullLocation = {title: "", data_id: "", thumbnail: "", address: "", rating: 0, numReviews: 0, website: ""};
  const [selectedLocation, setSelectedLocation] = useState<Location>(nullLocation);
  const dummyData: Location[] = [nullLocation, nullLocation, nullLocation, nullLocation, nullLocation];

  const addDefaultSrc = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = no_img;
  };

  const locationSelect = (location: Location) => {
    setSelectedLocation(location);
    setSearchWithSelected(location.title, true);
  };

  const setSearchWithSelected = (value: string, sel: boolean) => {
    setSearch(value);
    setSelected(sel);
  };

  return (
    <div className="searchpg-wrapper">
      <div className={
        `title ${(search.length > 0 && !selected) ? "title-condensed" : ""}`
      }>
        consensus
      </div>
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
      <div 
        className={`hotels-list`}
        style={{ opacity: `${(search.length > 0 && !selected) ? "1" : "0" }`, visibility: `${(search.length > 0 && !selected) ? "visible" : "hidden" }` }}
      >
        <ul className="locations-wrapper">
        {
          (loading ? dummyData : locations).map((location: Location) => (
            <div className="loc-card" key={location.data_id} onClick={() => locationSelect(location)}>
              <div className="loc-card-left">
                {loading ? <Skeleton width={"10vh"} height={"10vh"}/> : <img src={location.thumbnail || no_img} onError={addDefaultSrc} alt="new"/>}
                <div className="loc-card-title-wrapper">
                  <div>
                    <h4 className="loc-card-title">
                      {loading ? <Skeleton width={"20vh"}/> : location.title}
                    </h4>
                    <p style={{ fontSize: "8px"}}>{loading ? <Skeleton width={"20vh"}/> : location.address}</p>
                  </div>
                  <p style={{ fontSize: "8px"}}>{loading ? <Skeleton width={"20vh"}/> : `Rating: ${location.rating}(${location.numReviews})`}</p>
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
    </div>
  );
};

export default SearchPage;