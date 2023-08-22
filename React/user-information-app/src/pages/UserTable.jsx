import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { SET_USERS } from "../reducer/UserReducer";

const UserTable = () => {
  const { users, dispatch } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => dispatch({ type: SET_USERS, users: res.data }))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h3>User Info</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
