import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import UserForm from '../components/UserForm';
import CharacterList from '../components/CharacterList';

const RootContainer = () => {
    const { user } = useContext(UserContext);
    return (user && user.name && user.gender && user.faction) ? (
        <div>
            {`nome: ${user.name}, genero: ${user.gender}, faccao: ${user.faction} `}
            <CharacterList />
        </div>
    ) : (
        <div className="root-container">
            <h1>Digite seu nome e escolha um gênero</h1>
            <UserForm />
        </div>
    )
}

export default RootContainer
