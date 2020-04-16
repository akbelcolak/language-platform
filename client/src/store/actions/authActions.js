import API from "./../../utils/api";

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      dispatch({
        type: "LOGIN",
        payload: { email: email, token: res.data.id, userId: res.data.userId },
      });
    });
  };
};

// export const register = (user) => {
//   return (dispatch) => {
//     API.login(user, (res) => {
//       dispatch({
//         type: "LOGIN",
//         payload: { email: user.email, token: res.data.id, userId: res.data.userId },
//       });
//     });
//   };
// };
