import api from './api';

export const signup = (data) => api.post('/auth/signup', data);
export const signin = (data) => api.post('/auth/signin', data);
