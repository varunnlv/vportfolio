import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Enhanced Preloader Component
const Preloader = ({ progress }) => {
  return (
    <div id="preloader">   

      // <div className="imageContainer">
      //   <img src="/v1.png" alt="" />
      // </div>  
      <div className="loading-container">
        {/* <div className="spinner"></div> */}
        <div className="loading-text">Loading...</div>
        <div className="percentage">{Math.round(progress)}%</div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

    </div>
  );
};

const MainApp = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress as the document is parsed
    const updateProgress = (event) => {
      const totalTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      const currentTime = Date.now() - window.performance.timing.navigationStart;
      const newProgress = (currentTime / totalTime) * 100;

      setProgress(Math.min(newProgress, 100)); // Prevent exceeding 100%
    };

    // Set up intervals to simulate progress as resources are loaded
    const interval = setInterval(() => {
      updateProgress();
    }, 100); // Check every 100ms

    // On window load (when all resources are loaded), finalize progress
    window.addEventListener('load', () => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false); // Hide the preloader after everything has loaded
      }, 500); // Small delay to ensure smooth transition
    });

    return () => {
      clearInterval(interval);
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







