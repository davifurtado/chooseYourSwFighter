import React, { useContext, useState } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';
import CharacterDetails from './CharacterDetails';
import { UserContext } from '../contexts/UserContext';
import jediList from '../assets/jediList';
import sithList from '../assets/sithList';

const CharacterList = () => {
    const { characters } = useContext(CharactersContext);
    const [nameFilter, setNameFilter] = useState('');
    const { user } = useContext(UserContext);

    const faction = user.faction === 'jedi' ? jediList : sithList

    const charactersByFaction = characters.characters.filter(character => faction.includes(character.name))

    const filteredCharacters = nameFilter ? charactersByFaction.filter(character => character.name.toUpperCase().includes(nameFilter)) : charactersByFaction

    return (
        <div>
            <input
                type="text"
                value={nameFilter} 
                onChange={(e) => setNameFilter(e.target.value ? e.target.value.toUpperCase() : e.target.value)}
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
