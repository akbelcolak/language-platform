import axios from "axios";
import { toast } from "react-toastify";
import logger from "../services/logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status !== 422 &&
    error.response.status !== 401 &&
    error.response.status < 500;

  if (expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurrred,Please try again");
  }
  if (error.response && error.response.status === 422) {
    toast.error("E-mail is registered !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  if (error.response && error.response.status === 401) {
    toast.error(`Invalid Email or Password`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  return Promise.reject(error);
});
const API = {
  login: (email, password, success) => {
    axios
      .post(`/api/users/login`, { email: email, password: password })
      .then((res) => {
        success(res);
        window.location = "/home";
      });
  },
  register: async (user) => {
    await axios
      .post(`/api/users`, {
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        nativeLanguage: user.nativeLanguage,
        languageToLearn: user.languageToLearn,
        phoneNumber: user.phoneNumber,
        Gender: user.Gender,
        skill: user.skill,
        email: user.email,
        password: user.password,
        birthdate: user.birthdate,
      })
      .then((res) => {
        if (res) {
          toast.success("Student Created !", {
            position: toast.POSITION.TOP_CENTER,
          });
          window.location = "/login";
        }
      });
  },
  getUsers: (token, success) => {
    axios.get(`/api/users?access_token=${token}`).then((res) => {
      success(res);
    });
  },
  getSingleUser: (id, token, success) => {
    axios
      .get(`/api/users/${id}?access_token=${token}`)
      .then((res) => {
        success(res);
      });
  },
  getPosts: (token, success) => {
    axios.get(`/api/Posts?access_token=${token}`).then((res) => {
      success(res);
    });
  },
  addPost: (post, token, success) => {
    axios.post(`/api/Posts?access_token=${token}`, post).then((res) => {
      success(res);
    });
  },
  updatePost: (post, token, success) => {
    axios
      .patch(`/api/Posts/${post.id}?access_token=${token}`, post)
      .then((res) => {
        success(res);
      });
  },
  getSinglePost: (id, token, success) => {
    axios
      .post(`/api/Posts/${id}/accessTokens?access_token=${token}`)
      .then((res) => {
        success(res);
      });
  },
  uploadImage: (data, token, postId, userId, success) => {
    axios
      .post(
        `/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`,
        data
      )
      .then((res) => {
        success(res);
      });
  },
};

export default API;
