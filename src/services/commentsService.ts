import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const CommentsService = {
    async getCommentsByPostId(postId: number) {
        return axios.get(`${API_URL}/comments/?postId=${postId}`);
    },
};
