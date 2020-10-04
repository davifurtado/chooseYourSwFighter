import React, { createContext, useState, useContext, } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';


export const CharactersContext = createContext();

const CharactersContextProvider = (props) => {
    const { user } = useContext(UserContext);

    const [chosenCharacter, setChosenCharacter] = useState('');
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const config = {
          method: 'get',
          url: 'https://swapi.dev/api/people/?page=1',
          headers: { }
        }
        await axios(config)
        .then((response) => {
            const characters = response.data.results.filter(o => o.gender === user.gender)
            setCharacters({ characters: characters })
        })
        .catch(() => {
          alert('Erro ao consultar personagens!')
        })
    }

    const handleSetChosenCharacter = (character) => {
        setChosenCharacter({ character })
    }

    const handleResetCharacters = () => {
        setChosenCharacter({
            chosenCharacter: ''
        })
        setCharacters({
            characters: []
        })
    }

    return (
        <CharactersContext.Provider value={{ characters, getCharacters, chosenCharacter, handleSetChosenCharacter, handleResetCharacters }}>
            { props.children }
        </CharactersContext.Provider>
    );
}

export default CharactersContextProvider
