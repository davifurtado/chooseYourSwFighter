import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({});
    const addUser = (name, gender, faction) => {
        setUser({ name, gender, faction })
    }
    return (
        <UserContext.Provider value={{ user, addUser }}>
            { props.children }
        </UserContext.Provider>
    );
}

export default UserContextProvider
