import axios from "./index";

export const getBlogs = () => axios.get("/blogs");

export const getBlog = (id) => axios.get(`/blogs/${id}`);

export const createBlog = (data) =>
  axios.post("/blogs", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateBlog = (id, data) =>
  axios.post(`/blogs/${id}?_method=PUT`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteBlog = (id) =>
  axios.delete(`/blogs/${id}`);