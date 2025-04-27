import axios from '../api/axios';
import useAuth from './useAuth';
//import { Navigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const useRefreshToken = () => {
    const { setAuth, setUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    // TODO: Add user to context after refresh 
    // OR get user from backend after refresh on newsletter page
    // Route has to be created on backend to retrieve if user is subscribed or not
    //on the newsletter page. 

    const refresh = async () => {
        try {
            const response = await axios.get('/auth/refresh', {
                withCredentials: true
            });

            setAuth(prev => {
                // Debugging
                // console.log(JSON.stringify(prev));
                // console.log(response.data.access_token);
                return {
                    ...prev,
                    access_token: response.data.access_token,
                };
            });

            setUser(response.data.user);
            // console.log("Resposta do servidor quando pega: ", response.data.user);
            console.log("Resposta do servidor dentro the use refresh token: ", response.data.investments);
            return response.data.access_token;

        } catch (err) {
            // Debugging
            // console.error(err);
            navigate("/login", { state: { from: location }, replace: true });
        }
    }
    return refresh;
};

export default useRefreshToken;