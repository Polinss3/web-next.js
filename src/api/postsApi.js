// src/api/postsApi.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8001";

export const generatePost = async (lastPosts) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate-post/`, {
      last_posts: lastPosts,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating post:", error);
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-titles/`);
    return response.data.titles;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPostContent = async (slug) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-post/${slug}/`);
    return response.data.body_content;
  } catch (error) {
    console.error("Error fetching post content:", error);
    throw error;
  }
};
