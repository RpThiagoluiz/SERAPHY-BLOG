import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});
