import {useContext, useDebugValue} from 'react'; // Import useContext hook from React
import AuthContext from '../context/AuthProvider'; // Import AuthContext from AuthProvider

const useAuth = () => {
    const {auth} = useContext(AuthContext); // Get auth object from AuthContext
    console.log("inside use auth...")
    console.log(auth)
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext); // Return auth object
};

export default useAuth; // Export useAuth hook for use in other components