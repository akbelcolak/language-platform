import API from "./../../utils/api";

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      dispatch({
        type: "LOGIN",
        payload: { email: email, token: res.data.id, userId: res.data.userId }
      });
    });
  };
};
export const getUsers = (token) => {
  return (dispatch) => {
    API.getUsers(token, (res) => {
      console.log("res", res);
      dispatch({
        type: "GOT_USERS",
        payload: res.data,
      });
    });
    
  };
};

