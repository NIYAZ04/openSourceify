import React, { useState } from 'react';
import './learning.css';

const Learning: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="learning-container">
      <div className="wrapper">
        <div className="option">
          <input 
            className="input" 
            type="radio" 
            name="btn" 
            value="option1" 
            checked={selectedOption === 'option1'} 
            onChange={handleOptionChange} 
          />
          <div className="btn">
            <span className="span">HTML</span>
          </div>
        </div>
        <div className="option">
          <input 
            className="input" 
            type="radio" 
            name="btn" 
            value="option2" 
            checked={selectedOption === 'option2'} 
            onChange={handleOptionChange} 
          />
          <div className="btn">
            <span className="span">C++</span>
          </div>
        </div>
        <div className="option">
          <input 
            className="input" 
            type="radio" 
            name="btn" 
            value="option3" 
            checked={selectedOption === 'option3'} 
            onChange={handleOptionChange} 
          />
          <div className="btn">
            <span className="span">Python</span>
          </div>
        </div>
        <div className="option">
          <input 
            className="input" 
            type="radio" 
            name="btn" 
            value="option4" 
            checked={selectedOption === 'option4'} 
            onChange={handleOptionChange} 
          />
          <div className="btn">
            <span className="span">JavaScript</span>
          </div>
        </div>





       
      </div>
    </div>
  );
};

export default Learning;
