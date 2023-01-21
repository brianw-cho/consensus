import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void,
  child: ReactNode,
  width: string,
  height: string
}

const Button = ({ onClick, child, width, height }: ButtonProps) => {
  return (
    <div 
      className="btn-wrapper"
      style={{ width: width, height: height }}>
      {child}
    </div>
  );
};

export default Button;