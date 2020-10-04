import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({});
    const addUser = (name, gender, faction) => {
        setUser({ name, gender, faction })
    }

    const resetUser = () => {
        setUser({
            name: '',
            gender: '',
            faction : ' '
        })
    }

    return (
        <UserContext.Provider value={{ user, addUser, resetUser }}>
            { props.children }
        </UserContext.Provider>
    );
}

export default UserContextProvider
