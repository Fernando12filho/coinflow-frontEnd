import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !auth?.access_token ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, [auth?.access_token, refresh]);

  useEffect(() => {

    // Debugging
    // console.log(`isLoading: ${isLoading}`);
    // console.log(`aT: ${JSON.stringify(auth?.access_token)}`);
  }, [isLoading]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
