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

export const register = (
  firstName,
  // lastName,
  // location,
  // nativeLanguage,
  // languageToLearn,
  // phoneNumber,
  // Gender,
  // skill,
  // email,
  // password,
  // birthday
) => {
  return (dispatch) => {
    API.register(
      // firstName,
      // lastName,
      // location,
      // nativeLanguage,
      // languageToLearn,
      // phoneNumber,
      // Gender,
      // skill,
      // email,
      // password,
      // birthday,
      (res) => {
        if (res.status === 200) {
          // dispatch(login(email, password));
        }else{
          if(res.message){
            dispatch({
              type:'SHOW_ERROR',
              payload:res.message
            })
          }
        }
      }
    );
  };

};
