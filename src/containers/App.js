import React from 'react';
import './App.css';

// Import Components
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopNavigationTitle from '../components/TopNavigationTitle/TopNavigationTitle';

function App() {
  return (
    <div className="App">
      <TopNavigation>
        <TopNavigationTitle />
      </TopNavigation>
    </div>
  );
}

export default App;
