import React from 'react';

const CharacterDetails = ({ character }) => {
    return (
        <li>
            <div>Nome: { character.name }</div>
            <div>Altura: { character.height }</div>
            <div>Cor dos Olhos: { character.eye_color }</div>
        </li>
    );
}

export default CharacterDetails