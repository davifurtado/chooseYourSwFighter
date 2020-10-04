import React from 'react';

const CharacterDetails = ({ character }) => {
    return (
        <li>
            <div>Nome: { character.name }</div>
            <div>Altura: { character.height } CM</div>
        </li>
    );
}

export default CharacterDetails