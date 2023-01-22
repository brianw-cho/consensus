import React from 'react';
import './SearchBar.css';
import { BiSearch } from 'react-icons/bi'

interface SearchBarProps {
  width: string,
  height: string,
  fontSize: string,
  value: string,
  setValue: (value: string) => void
}

const SearchBar = ({ width, height, fontSize, value, setValue }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchbar" style={{ width: width, height: height }}>
      <span style={{ fontSize: fontSize, height: fontSize }}><BiSearch /></span>
      <input
        type="text" 
        style={{ width: width, height: height, fontSize: fontSize }}
        placeholder="Search For Hotels"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;