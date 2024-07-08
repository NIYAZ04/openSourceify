import React, { useState } from 'react';
import './learning.css';
import HTMLComponent from './languages/html';
import CPPComponent from './languages/cpp';
import JavaScriptComponent from './languages/javaScript';
import PostgreSQL from './languages/postgreSql';

const Learning: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'HTML':
        return <HTMLComponent />;
      case 'C++':
        return <CPPComponent />;
      case 'JavaScript':
        return <JavaScriptComponent />;
      case 'PostgreSql':
        return <PostgreSQL />;
      default:
        return <div className="default-message">Select what you want to learn</div>;
    }
  };

  return (
    <div className="learning-container">
      <div className="options-wrapper">
        {['HTML', 'C++', 'JavaScript', 'PostgreSql'].map(option => (
          <label className="option" key={option}>
            <input 
              className="input" 
              type="radio" 
              name="btn" 
              value={option} 
              checked={selectedOption === option} 
              onChange={handleOptionChange} 
            />
            <div className="btn">
              <span className="span">{option}</span>
            </div>
          </label>
        ))}
      </div>
      <div className="content-wrapper">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default Learning;
