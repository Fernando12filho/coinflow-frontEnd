import {useContext, useDebugValue} from 'react'; // Import useContext hook from React
import AuthContext from '../context/AuthProvider'; // Import AuthContext from AuthProvider

const useAuth = () => {
    const {auth} = useContext(AuthContext); // Get auth object from AuthContext
    useDebugValue(auth, auth => auth?.access_token ? "Logged In" : "Logged Out")
    return useContext(AuthContext); // Return auth object
};

export default useAuth; // Export useAuth hook for use in other components