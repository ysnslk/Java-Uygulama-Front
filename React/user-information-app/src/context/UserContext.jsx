import React, { useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/UserReducer";
import axios from "axios";

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, dispatch] = useReducer(reducer, []);

  

  const addUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:5000/users", user);
      dispatch({ type: "ADD_USER", user: response.data });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ users, addUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserProvider };
