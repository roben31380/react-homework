// import React from 'react';
import { createRoot } from 'react-dom/client';

function Logo() {
  return <img src="./src/assets/react.svg" alt="리액트" />;
}

function App() {
  return (
    <div className="App">
      <Logo />
    </div>
  );
}

const domElement = document.getElementById('root');
if (domElement) {
  const reactDomElement = createRoot(domElement);
  reactDomElement.render(<App />);
}
