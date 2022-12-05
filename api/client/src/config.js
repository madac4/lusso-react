import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://lusso.herokuapp.com/api',
});
