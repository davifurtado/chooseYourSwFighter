import React, { useContext } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';
import { UserContext } from '../contexts/UserContext';

const FinalCharacter = () => {
    const { user } = useContext(UserContext);
    const chosenCharacter = useContext(CharactersContext);

    console.log(chosenCharacter)
    return (
        <div>
            Parabéns, { user.name }, você escolheu o peronsagem { chosenCharacter.chosenCharacter.character }
        </div>
    );
}

export default FinalCharacter
