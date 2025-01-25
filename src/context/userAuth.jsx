import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([])


    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, users, setUsers, isLoggedIn, setIsLoggedIn }} >

            {children}

        </AuthContext.Provider>


    )

};

export { AuthContext, AuthProvider };