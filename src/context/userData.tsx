import { createContext, useState } from "react";
import SignIn from "../components/signIn";

const usersContext = createContext(null);

const UsersProvider = ({ children }) => {
    const [email, setEmail] = useState('');

    return (
        <usersContext.Provider value={{ email, setEmail }} >
            <SignIn />
        </usersContext.Provider>
    )
};

export { UsersProvider };