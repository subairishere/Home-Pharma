import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const initialValue = localStorage.getItem("authToken");
  const [token, setToken] = useState(initialValue);

  const state = {
    token: null,
    login: (value) => {
      setToken(value);
      localStorage.setItem("authToken", value);
    },
    getToken: () => token,
    logout: () => {
      setToken(null);
      localStorage.removeItem("authToken");
    },
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
