import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Enhanced Preloader Component
const Preloader = ({ progress }) => {
  return (
   <div id="preloader">
      <div className="imageContainer">
        <img src="/v.png" alt="" />
      </div>
      <div className="loading-container">
          <div className="spinner"></div>
          <div className="loading-text">Loading...</div>
      </div>
      <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="percentage">{Math.round(progress)}%</div>
  </div>
  );
};

const MainApp = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100; // Prevent exceeding 100%
        }
        return Math.min(oldProgress + Math.random() * 20, 100); // Randomly increase progress
      });
    }, 500); // Adjust timing as necessary

    // Simulate loading completion
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000); // Simulate loading for 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <>
      {loading ? <Preloader progress={progress} /> : <App />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

reportWebVitals();
