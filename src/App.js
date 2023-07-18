import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './component/Home';
import Navbar from './component/Navbar';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous work (e.g., fetching data) that takes time to complete.
    // In a real-world scenario, you'd replace this with actual async operations.
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the "loading" time (simulated here).
    }, 2000); // Adjust the duration as needed.
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="spinner-container">
          {/* Replace this with your actual spinner component or HTML */}
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
        <Navbar/>
        <Home />
        </>




      )}
    </div>
  );
}

export default App;
