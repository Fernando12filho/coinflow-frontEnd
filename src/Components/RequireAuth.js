import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const auth = useAuth();
    const location = useLocation();
    return (
            auth?.auth.access_token
                ? <Outlet /> // ✅ Renders child routes (e.g., <Home />)
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;

