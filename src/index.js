import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Preloader component
const Preloader = ({ progress }) => {
  return (
    <div id="preloader">
      <div className="spinner"></div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="percentage">{progress}%</div>
    </div>
  );
};

const MainApp = () => {
  const [progress, setProgress] = useState(0);

  // Simulate dynamic loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => Math.min(oldProgress + 5, 100)); // Increment progress
    }, 300); // Adjust as necessary for your needs

    return () => clearInterval(progressInterval);
  }, []);

  // Hide preloader when the page has fully loaded
  useEffect(() => {
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.display = 'none'; // Hide preloader after reaching 100%
        }
      }, 500); // Optional delay to show 100%
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      <Preloader progress={progress} />
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
