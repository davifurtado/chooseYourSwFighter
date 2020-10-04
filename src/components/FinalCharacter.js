import React, { useContext } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';
import { UserContext } from '../contexts/UserContext';
import 'react-star-wars-crawl/lib/index.css'
import Crawl from 'react-star-wars-crawl'

const FinalCharacter = () => {
    const { user } = useContext(UserContext);
    const chosenCharacter = useContext(CharactersContext);

    console.log(chosenCharacter)
    return (
        <div>
            <Crawl containerStyles={{ width: '90vw', height: '85vh' }} >
                <div>
                    Em uma galáxia muito distante, { user.name } escolheu { chosenCharacter.chosenCharacter.character } para ser seu Lutador. Boa sorte, viajante
                </div>
            </Crawl>
        </div>
    );
}

export default FinalCharacter
