import React, { useState } from 'react';
import { topicsOfJavaScript, topicContentsOfJavaScript } from './Data/javaScriptData';
import "./specificStyleJavascript.css"

const JavaScriptSpecific: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('Introduction');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    if (window.innerWidth <= 850) {
      setSidebarOpen(false);
    }
  };

  const renderTopicContent = () => {
    const topic = topicContentsOfJavaScript[selectedTopic];
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
    <div className="ContainerJavaScriptSpecific">
      <button className="SidebarToggleJavaScriptSpecific" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? 'Close' : 'SideBar'}
      </button>
      <div className={`SidebarJavaScriptSpecific ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          {topicsOfJavaScript.map(topic => (
            <li key={topic} onClick={() => handleTopicChange(topic)}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className="ContentJavaScriptSpecific">
        {renderTopicContent()}
      </div>
    </div>
  );
};

export default JavaScriptSpecific;
