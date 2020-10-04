import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import UserForm from '../components/UserForm';

const RootContainer = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    return (user && user.name && user.gender && user.faction) ? (
        <div>
            {`nome: ${user.name}, genero: ${user.gender}, faccao: ${user.faction} `}
        </div>
    ) : (
        <div className="root-container">
            <h1>Digite seu nome e escolha um gênero</h1>
            <UserForm />
        </div>
    )
}

export default RootContainer