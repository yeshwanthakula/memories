
import * as api from '../api';

// redux thunk lets us to create an action creator with return ascyn/sync funcs//

 export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createPost = (npost) => async (dispatch) => {
    try {
      const { data } = await api.createPost(npost);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

 
  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
    
  };
  export const deletePost = (id) => async (dispatch) => {
    try {
       await api.deletePost(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
 