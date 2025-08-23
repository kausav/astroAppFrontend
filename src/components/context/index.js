import { createContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // const token = cookie.get("token");

    // if (token) {
      setIsLoggedIn(true);
    // }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
