import axios from '../api/axios';
import useAuth from './useAuth';
//import { Navigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

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
                    access_token: response.data.access_token
                };
            });

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