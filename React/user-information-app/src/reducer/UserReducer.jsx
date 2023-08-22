export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";

const reducer = (users, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...users, action.user];
    case SET_USERS:
      return users;
    default:
      return users;
  }
};

export default reducer;
