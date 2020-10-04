import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserForm = () => {
    const { addUser } = useContext(UserContext)
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const handleOnChangeRadioButton = (e) => {
        setGender(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, gender);
        setName('');
        setGender('');
    }
    return (
        <form onSubmit={handleSubmit}>
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
                onChange={handleOnChangeRadioButton}
            />
            <label htmlFor="male">Male</label>
            <input 
                type="radio" 
                id="female" 
                name="gender" 
                value="female"
                onChange={handleOnChangeRadioButton}
            />
            <label htmlFor="female">Female</label>
            <div>
                <button type="submit">Go! </button>
            </div>
        </form>
    );
}

export default UserForm
