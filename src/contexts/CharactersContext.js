import React, { createContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

export const CharactersContext = createContext();

const CharactersContextProvider = (props) => {
    const { user } = useContext(UserContext);

    const [characters, setCharacters] = useState([]);

    const getCharacters = (name, gender, faction) => {
        setUser({ name, gender, faction })
    }

    return (
        <CharactersContext.Provider value={{ characters, getCharacters }}>
            { props.children }
        </CharactersContext.Provider>
    );
}

export default CharactersContextProvider
