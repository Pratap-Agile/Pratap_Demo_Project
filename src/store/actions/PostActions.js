import {
  createPost,
  formatPosts,
  getPosts,
  deletePost,
  updatePost,
  displayPost,
} from "../../services/PostsService";
import {
  CONFIRMED_CREATE_POST_ACTION,
  CONFIRMED_DELETE_POST_ACTION,
  CONFIRMED_EDIT_POST_ACTION,
  CONFIRMED_GET_POSTS,
  DISPLAY_GET_POSTS,
} from "./PostTypes";

export function deletePostAction(postId, history) {
  return (dispatch, getState) => {
    deletePost(postId).then((response) => {
      dispatch(confirmedDeletePostAction(postId));
      history.push("/theme/post");
    });
  };
}

export function confirmedDeletePostAction(postId) {
  return {
    type: CONFIRMED_DELETE_POST_ACTION,
    payload: postId,
  };
}

export function createPostAction(postData) {
  return (dispatch, getState) => {
    createPost(postData).then((response) => {
      const singlePost = {
        ...postData,
        id: response.data.name,
      };
      dispatch(confirmedCreatePostAction(singlePost));
      // history.push("/theme/post");
    });
  };
}

export function getPostsAction() {
  return (dispatch, getState) => {
    getPosts().then((response) => {
      let posts = formatPosts(response.data);
      dispatch(confirmedGetPostsAction(posts));
    });
  };
}

export function confirmedCreatePostAction(singlePost) {
  return {
    type: CONFIRMED_CREATE_POST_ACTION,
    payload: singlePost,
  };
}

export function confirmedGetPostsAction(posts) {
  return {
    type: CONFIRMED_GET_POSTS,
    payload: posts,
  };
}

export function confirmedUpdatePostAction(post) {
  return {
    type: CONFIRMED_EDIT_POST_ACTION,
    payload: post,
  };
}

//display add
export function confirmedDisplayPostAction(post) {
  return {
    type: DISPLAY_GET_POSTS,
    payload: post,
  };
}

export function updatePostAction(post, history) {
  return (dispatch, getState) => {
    updatePost(post, post.id).then((reponse) => {
      dispatch(confirmedUpdatePostAction(post));
      // history.push("/theme/post");
    });
  };
}

//display add

export const displayPostAction = (user) => (dispatch) => {
  return displayPost(user, user.id)
    .then((reponse) => {
      dispatch(confirmedDisplayPostAction(user));
      return reponse;
    })
    .catch((err) => {
      return err;
    });
};
