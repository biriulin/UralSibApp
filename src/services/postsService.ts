import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const PostsService = {
    async getAllPosts() {
        return axios.get(`${API_URL}/posts`);
    },
};

export const PostService = {
    async getPost(postId: number) {
        return axios.get(`${API_URL}/posts/${postId}`);
    },
};
