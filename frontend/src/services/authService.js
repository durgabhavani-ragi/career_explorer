import request from './api';

export const authService = {
  login: async (email, password) => {
    return await request('/auth/login', {
      method: 'POST',
      body: { email, password },
    });
  },

  register: async (name, email, password) => {
    return await request('/auth/register', {
      method: 'POST',
      body: { name, email, password },
    });
  },

  getMe: async () => {
    return await request('/auth/me');
  },

  updateProfile: async (name, password) => {
    return await request('/auth/profile', {
      method: 'PUT',
      body: { name, password },
    });
  },
};

export default authService;
