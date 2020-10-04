import React, { useContext, useState } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';
import CharacterDetails from './CharacterDetails';
import { UserContext } from '../contexts/UserContext';
import jediList from '../assets/jediList';
import sithList from '../assets/sithList';
import FinalCharacter from './FinalCharacter'

const CharacterList = () => {
    const { characters, handleSetChosenCharacter, chosenCharacter } = useContext(CharactersContext);
    const [nameFilter, setNameFilter] = useState('');
    const [finish, setFinish] = useState(false);
    const { user } = useContext(UserContext);

    const faction = user.faction === 'jedi' ? jediList : sithList

    const charactersByFaction = characters.characters.filter(character => faction.includes(character.name))

    const filteredCharacters = nameFilter ? charactersByFaction.filter(character => character.name.toUpperCase().includes(nameFilter)) : charactersByFaction

    return (
        <div>
            {
                !finish ? (
                    <div>
                        <input
                            type="text"
                            value={nameFilter} 
                            onChange={(e) => setNameFilter(e.target.value ? e.target.value.toUpperCase() : e.target.value)}
                            placeholder="Pesquisar pelo nome..."
                        />
                        {filteredCharacters.length ?
                            <div 
                            >
                                <div>
                                    {   filteredCharacters.map(character => {
                                            return ( 
                                                <div 
                                                    key={`${character.name}radio`}
                                                    style={{
                                                        border: '1px solid'
                                                    }}
                                                >
                                                    <input 
                                                        type="radio" 
                                                        id="chosenCharacter" 
                                                        name="chosenCharacter" 
                                                        value={character.name}
                                                        onChange={(e) => handleSetChosenCharacter(e.target.value)}
                                                />
                                                    <CharacterDetails character={character} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button 
                                    onClick={() => setFinish(true)}
                                    disabled={!chosenCharacter}
                                > 
                                    GO! 
                                </button>
                            </div> : <div className="empty" >Nenhum Personagem Encontrado </div>
                        }
                    </div>
                ) : (
                    <div> 
                        <FinalCharacter />
                    </div>
                    )
            }
        </div>
    )
}

export default CharacterList
