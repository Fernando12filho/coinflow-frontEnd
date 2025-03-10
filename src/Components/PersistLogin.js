import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import { useEffect, useState } from "react";

const PersistLogin = () => {
  const { auth, persist } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // Avoid unwanted call to verifyRefreshToken
    !auth?.access_token && persist ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`)
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
  }, [isLoading])

  return (
    <>
        {!persist
            ? <Outlet />
            : isLoading
                ? <p>Loading...</p>
                : <Outlet />
        }
    </>
  )
}

export default PersistLogin;