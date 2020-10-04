import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({});
    const addUser = (name, gender) => {
        setUser({ name, gender })
    }
    return (
        <UserContext.Provider value={{ user, addUser }}>
            { props.children }
        </UserContext.Provider>
    );
}

export default UserContextProvider
