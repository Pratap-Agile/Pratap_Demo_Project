import axiosInstance from "./AxiosInstance";

export function getPosts() {
  return axiosInstance.get(`crud`);
}

export function createPost(postData) {
  return axiosInstance.post(`crud`, postData);
}

export function updatePost(post, postId) {
  return axiosInstance.put(`crud/${postId}`, post);
}

export function displayPost(post, postId) {
  return axiosInstance.put(`crud/${postId}`, post);
}

export function deletePost(postId) {
  return axiosInstance.delete(`crud/${postId}`);
}

export function formatPosts(postsData) {
  let posts = [];
  for (let key in postsData) {
    posts.push({ ...postsData[key], id: key });
  }

  return posts;
}
