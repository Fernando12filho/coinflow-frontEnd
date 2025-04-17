import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();
    const [user, setUser] = useState([]);
    const [investments, setInvestments] = useState([]);
    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser, investments, setInvestments }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;