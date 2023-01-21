import React from 'react';
import './App.css';
import { BiArrowBack } from 'react-icons/bi';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="header">
          <Button 
            onClick={() => {}}
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
