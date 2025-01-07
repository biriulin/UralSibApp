import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const UserService = {
    async getUser(userId: number) {
        return axios.get(`${API_URL}/users/${userId}`);
    },
};
