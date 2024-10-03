// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // Enhanced Preloader Component
// const Preloader = ({ progress }) => {
//   return (

//       <div id="preloader">   
      
//         <div className="loading-container">
//             <div className="loading-text">Loading...</div>
//             <div className="percentage">{Math.round(progress)}%</div>
//         </div>
//         <div className="progress-container">
//             <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//         </div>
   
//       </div>

//   );
// };

// const MainApp = () => {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {
//       const resources = performance.getEntriesByType('resource');
//       const totalResources = resources.length;
//       const loadedResources = resources.filter(resource => resource.responseEnd > 0).length;

//       const newProgress = (loadedResources / totalResources) * 100;

//       // Prevent exceeding 100% and set progress
//       setProgress(prevProgress => Math.min(newProgress, 100));
      
//       // If progress reaches 100%, clear the interval
//       if (newProgress >= 100) {
//         clearInterval(interval);
//       }
//     }, 500); // Adjust timing as necessary

//     // Simulate loading completion
//     const loadingTimer = setTimeout(() => {
//       setLoading(false);
//       clearInterval(interval);
//     }, 1000); // Simulate loading for 5 seconds

//     return () => {
//       clearInterval(interval);
//       clearTimeout(loadingTimer);
//     };
//   }, []);

//   return (
//     <>
//       {loading ? <Preloader progress={progress} /> : <App />}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <MainApp />
//   </React.StrictMode>
// );

// reportWebVitals();



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
  const [renderedElementsCount, setRenderedElementsCount] = useState(0);
  const totalExpectedElements = 3; // Change this to the total number of key UI elements

  useEffect(() => {
    const interval = setInterval(() => {
      const resources = performance.getEntriesByType('resource');
      const totalResources = resources.length;
      const loadedResources = resources.filter(resource => resource.responseEnd > 0).length;

      // Prevent division by zero and calculate new progress
      const newProgress = totalResources > 0 
        ? (loadedResources / totalResources) * 100 
        : 0;

      // Combine resource loading and UI rendering progress
      const combinedProgress = Math.min(newProgress + (renderedElementsCount / totalExpectedElements) * 100, 100);
      setProgress(combinedProgress);
      
      // If combined progress reaches 100%, clear the interval
      if (combinedProgress >= 100) {
        clearInterval(interval);
      }
    }, 500); // Update every 500ms

    // Simulate loading completion for 5 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1000); // Simulate loading for 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, [renderedElementsCount]); // Track rendered elements count

  useEffect(() => {
    // Monitor DOM for rendered elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          // Check if the added node is a key element you want to track
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Increment rendered elements count when a specific element is rendered
            // You can adjust this to match your key elements
            if (node.matches('.hero') || node.matches('.services') || node.matches('.services1') || node.matches('.portfolio') || node.matches('.parallax')) {
              setRenderedElementsCount(prevCount => prevCount + 1);
          }
          }
        });
      });
    });

    // Start observing the document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
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




















