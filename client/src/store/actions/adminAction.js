import API from "./../../utils/api";

export const getUsers = (token) => {
  return dispatch => {
    API.getUsers(token, res => {
      dispatch({
        type: "GOT_USERS",
        payload:res.data
      });
    });
    console.log('token',token)
  };
};

export const getPosts= (token) =>{
  return dispatch =>{
    API.getPosts(token, res =>{
      dispatch({
        type:'GOT_POSTS',
        payload:res.data
      })
    })
    console.log('token2',token)
  }
}

export const addPost = (post, token) =>{
  return dispatch =>{
    API.addPost(post, token , res =>{
      dispatch({
        type:'POST_ADDED',
        payload:res.data
      })
    }
    )}
}
export const getSinglePost = (id, token)=>{
  return dispatch=>{
    API.getSinglePost(id, token, res =>{
      dispatch({
        type:'GOT_SINGLE_POST',
        payload:res.data
      })
    })
  }
}