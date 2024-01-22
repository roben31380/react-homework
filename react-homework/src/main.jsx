// import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const domElement = document.getElementById('root');
if (domElement) {
  const reactDomElement = createRoot(domElement);
  reactDomElement.render(<App />);
}
