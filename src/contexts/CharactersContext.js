import React, { createContext, useState, useContext, } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios'

export const CharactersContext = createContext();

const CharactersContextProvider = (props) => {
    const { user } = useContext(UserContext);

    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const config = {
          method: 'get',
          url: 'http://swapi.dev/api/people/?page=1',
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

    /*useEffect(() => {
        getCharacters()//console.log('teste use effecet');
    }, []) */

    return (
        <CharactersContext.Provider value={{ characters, getCharacters }}>
            { props.children }
        </CharactersContext.Provider>
    );
}

export default CharactersContextProvider
