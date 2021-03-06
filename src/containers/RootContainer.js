import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CharactersContext } from '../contexts/CharactersContext';
import UserForm from '../components/UserForm';
import CharacterList from '../components/CharacterList';

const RootContainer = () => {
    const { user, resetUser } = useContext(UserContext);
    const { handleResetCharacters } = useContext(CharactersContext);

    const handleReset = () => {
        resetUser();
        handleResetCharacters()
    }
    return (user && user.name && user.gender && user.faction && user.faction !== " ") ? (
        <div className="root-container">
            <div style={{ margin: '5px' }}>
                <div>
                    {`Bem vindo (a), ${user.name}`}
                </div>
                <div style={{ margin: '5px' }}>
                    {`Gênero: ${user.gender  === 'male' ? "Homem" : "Mulher"}, Facção: ${user.faction} `}
                </div>
                <button onClick={handleReset}> Voltar </button>
            </div>
            <CharacterList />
        </div>
    ) : (
        <div className="root-container">
            <h1 style={{ margin: '5px' }}>Digite seu nome e escolha um gênero</h1>
            <UserForm />
        </div>
    )
}

export default RootContainer
