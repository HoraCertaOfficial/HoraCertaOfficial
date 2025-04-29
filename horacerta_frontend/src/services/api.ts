import axios from 'axios';
import { auth } from './firebaseConfig';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(async (config) => {
  if (auth.currentUser) {
    const token = await auth.currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; 