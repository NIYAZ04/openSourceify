import React, { useState } from 'react';
import './topicComponent.css';
import { topicsOfCpp,topicContentsOfCpp } from './Data/CppData';
const cpp: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('HTML Introduction');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    if (window.innerWidth <= 850) {
      setSidebarOpen(false);
    }
  };

  const renderTopicContent = () => {
    const topic = topicContentsOfCpp[selectedTopic];
    if (!topic) {
      return <p>Content not found try to change</p>; 
    }
    return (
      <>
        <h2>{topic.title}</h2>
        <p>{topic.content}</p>
        {topic.code && (
          <pre>
            <code>{topic.code}</code>
          </pre>
        )}
      </>
    );
  };

  return (
    <div className="main-container">
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? 'Close' : 'SideBar'}
      </button>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          {topicsOfCpp.map(topic => (
            <li key={topic} onClick={() => handleTopicChange(topic)}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className="content">
        {renderTopicContent()}
      </div>
    </div>
  );
};

export default cpp;
