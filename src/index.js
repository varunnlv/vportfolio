import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Enhanced Preloader Component
const Preloader = ({ progress }) => {
  return (

      <div id="preloader">   
      
        <div className="loading-container">
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

    const interval = setInterval(() => {
      const resources = performance.getEntriesByType('resource');
      const totalResources = resources.length;
      const loadedResources = resources.filter(resource => resource.responseEnd > 0).length;

      const newProgress = (loadedResources / totalResources) * 100;

      // Prevent exceeding 100% and set progress
      setProgress(prevProgress => Math.min(newProgress, 100));
      
      // If progress reaches 100%, clear the interval
      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, 500); // Adjust timing as necessary

    // Simulate loading completion
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1000); // Simulate loading for 5 seconds

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
