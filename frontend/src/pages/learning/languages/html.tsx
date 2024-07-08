import React, { useState } from 'react';
import './topicComponent.css';

const topics = [
  "HTML Tutorial","HTML Introduction",  "HTML Basic", 
  "HTML Elements", "HTML Attributes", "HTML Headings", "HTML Paragraphs", "HTML Styles",
  "HTML Formatting", "HTML Quotations", "HTML Comments", "HTML Colors", "HTML CSS",
  "HTML Links", "HTML Images", "HTML Favicon", "HTML Page Title", "HTML Tables",
  "HTML Lists", "HTML Block & Inline", "HTML Div", "HTML Classes", "HTML Id",
  "HTML Iframes", "HTML JavaScript", "HTML File Paths", "HTML Head", "HTML Layout",
  "HTML Responsive",  "HTML Semantics",
  "HTML Entities", "HTML Symbols", "HTML URL Encode",
  "HTML vs. XHTML", "HTML Forms", "HTML Form Attributes", "HTML Form Elements", 
  "HTML Input Types", "HTML Input Attributes", "Input Form Attributes"
];

const topicContents: { [key: string]: { title: string; content: string; code?: string } } = {
  "HTML Introduction": {
    title: "HTML Introduction",
    content: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages.",
    code: `<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`
  },
  "HTML Elements": {
    title: "HTML Elements",
    content: "An HTML element is defined by a start tag, some content, and an end tag.",
    code: `<h1>My First Heading</h1>
<p>My first paragraph.</p>`
  },
  // Add more topic contents here...
};

const HTMLComponent: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('HTML Introduction');

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };

  const renderTopicContent = () => {
    const topic = topicContents[selectedTopic];
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
    <div className="topic-container">
      <div className="topics">
        <ul>
          {topics.map(topic => (
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

export default HTMLComponent;
