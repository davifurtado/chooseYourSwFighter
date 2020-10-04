import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CharactersContext } from '../contexts/CharactersContext';

const UserForm = () => {
    const { addUser } = useContext(UserContext)
    const { getCharacters } = useContext(CharactersContext)
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [faction, setFaction] = useState(' ');

    const handleOnChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleOnChangeFaction = (e) => {
        setFaction(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (faction && faction !== " ") {
            await getCharacters();
            addUser(name, gender, faction);
        } else {
            addUser(name, gender, faction);
            setFaction('')
        }
    }

    const { user } = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit}>
            { !user.name ? (
                <div>
                    <input
                        type="text"
                        placeholder="Nome..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        maxLength={9}
                    />
                    <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="male"
                        onChange={handleOnChangeGender}
                        defaultChecked
                    />
                    <label htmlFor="male">Homem</label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female"
                        onChange={handleOnChangeGender}
                    />
                    <label htmlFor="female">Mulher</label>
                </div>
                ) : (
                    <div>
                        <h2>E a sua facção...</h2>
                        <div>
                            <input 
                                type="radio" 
                                id="jedi" 
                                name="facction" 
                                value="jedi"
                                onChange={handleOnChangeFaction}
                                checked={faction === 'jedi'}
                            />
                            <label htmlFor="jedi">Jedi</label>
                            <input 
                                type="radio" 
                                id="sith" 
                                name="facction" 
                                value="sith"
                                onChange={handleOnChangeFaction}
                                checked={faction === 'sith'}
                            />
                            <label htmlFor="sith">Sith</label>
                        </div>
                    </div>
                )
            }
            <div>
                <button 
                    type="submit"
                    disabled={ !name || !faction }
                >
                    Go! 
                </button>
            </div>
        </form>
    );
}

export default UserForm
