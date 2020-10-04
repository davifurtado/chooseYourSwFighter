import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CharactersContext } from '../contexts/CharactersContext';

const UserForm = () => {
    const { addUser } = useContext(UserContext)
    const { getCharacters } = useContext(CharactersContext)
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [faction, setFaction] = useState('');

    const handleOnChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleOnChangeFaction = (e) => {
        setFaction(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /*if (name && gender && faction) {
            getCharacters()
                .then(() => {
                    addUser(name, gender, faction);
                })
        } else {
            addUser(name, gender, faction);
        }*/

        addUser(name, gender, faction);
        getCharacters()
    }

    const { user } = useContext(UserContext);

    return (
        <form onSubmit={handleSubmit}>
            { !user.name ? (
                <div>
                    <input
                        type="text"
                        placeholder="Your Name..."
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
                    />
                    <label htmlFor="male">Male</label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female"
                        onChange={handleOnChangeGender}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                ) : (
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
                )
            }
            <div>
                <button type="submit">Go! </button>
            </div>
        </form>
    );
}

export default UserForm
