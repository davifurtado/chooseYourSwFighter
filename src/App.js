import React from 'react';
import './App.css';
import UserContextProvider from './contexts/UserContext';
import CharactersContextProvider from './contexts/CharactersContext';
import RootContainer from './containers/RootContainer';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <CharactersContextProvider>
          <RootContainer />
        </CharactersContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
