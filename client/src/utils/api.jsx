import axios from "axios";
const port = process.env.PORT
const host = `ds161224.mlab.com:${port}`;
const API = {
  login: (email, password, success) => {
    axios
      .post(`${host}/api/users/login`, { email: email, password: password })
      .then((res) => {
        success(res); 
      });
  },
  register: (
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
    // birthday,
    success
  ) => {
    axios
      .post(`${host}/api/users`, {
        firstName:firstName,
        // lastName: lastName,
        // location: location,
        // nativeLanguage: nativeLanguage,
        // languageToLearn: languageToLearn,
        // phoneNumber: phoneNumber,
        // Gender: Gender,
        // skill: skill,
        // email: email,
        // passwordword: password,
        // birthday: birthday,
      })
      .then((res) => {
        success(res);
      });
  },
  getUsers: (token, success) => {
    axios.get(`${host}/api/users?access_token=${token}`).then((res) => {
      success(res);
    });
  },
  getPosts: (token, success) => {
    axios.get(`${host}/api/Posts?access_token=${token}`).then((res) => {
      success(res);
    });
  },
  addPost: (post, token, success) => {
    axios.post(`${host}/api/Posts?access_token=${token}`, post).then((res) => {
      success(res);
    });
  },
  updatePost: (post, token, success) => {
    axios
      .patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
      .then((res) => {
        success(res);
      });
  },
  getSinglePost: (id, token, success) => {
    axios
      .post(`${host}/api/Posts/${id}/accessTokens?access_token=${token}`)
      .then((res) => {
        success(res);
      });
  },
  uploadImage: (data, token, postId, userId, success) => {
    axios
      .post(
        `${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`,
        data
      )
      .then((res) => {
        success(res);
      });
  }
  
};

export default API;
