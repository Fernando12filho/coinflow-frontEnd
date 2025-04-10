import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();
    const [user, setUser] = useState([]);
    const [userInvestments, setUserInvestments] = useState([]);
    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser, userInvestments, setUserInvestments }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;