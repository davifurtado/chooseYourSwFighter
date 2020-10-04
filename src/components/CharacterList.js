import React, { useContext, useState } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';
import CharacterDetails from './CharacterDetails';

const CharacterList = () => {
    const { characters } = useContext(CharactersContext);
    const [nameFilter, setNameFilter] = useState('');
    const filteredCharacters = nameFilter ? characters.characters.filter(character => character.name.includes(nameFilter)) : characters.characters

    return (
        <div>
            <input
                type="text"
                value={nameFilter} 
                onChange={(e) => setNameFilter(e.target.value)}
                placeholder="Pesquisar pelo nome..."
            />
            {filteredCharacters.length ?
                <div>
                    <ul>
                        { filteredCharacters.map(character => {
                            return ( <CharacterDetails character={character} key={character.name} />)
                        })}
                    </ul>
                </div> : <div className="empty" >Nenhum Personagem Encontrado </div>
            }
        </div>
    )
}

export default CharacterList
