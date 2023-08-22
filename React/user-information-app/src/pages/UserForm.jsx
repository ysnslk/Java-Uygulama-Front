import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserForm = () => {
  const { addUser } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
    };

    addUser(user);

    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.email.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="surname" placeholder="Surname" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
