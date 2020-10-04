import React from 'react';
import './App.css';
import UserContextProvider from './contexts/UserContext';
import RootContainer from './containers/RootContainer';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RootContainer />
      </UserContextProvider>
    </div>
  );
}

export default App;
