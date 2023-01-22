import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import './Loading.css';

interface LoadingProps {
  fontSize: string,
  width: string,
  height: string
}

const Loading = ({ fontSize, width, height }: LoadingProps) => {
  return (
    <div 
      className="loading-spinner" 
      style={{ fontSize: fontSize, width: width, height: height }}
    >
      <AiOutlineLoading />
    </div>
  );
};

export default Loading;