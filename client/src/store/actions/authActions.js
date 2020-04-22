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


