import request from './api';

export const careerService = {
  getCareers: async (filters = {}) => {
    const queryParams = new URLSearchParams();
    if (filters.search) queryParams.append('search', filters.search);
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.skill) queryParams.append('skill', filters.skill);
    if (filters.subject) queryParams.append('subject', filters.subject);

    const queryString = queryParams.toString();
    const endpoint = `/careers${queryString ? `?${queryString}` : ''}`;
    return await request(endpoint);
  },

  getCareerBySlug: async (slug) => {
    return await request(`/careers/slug/${slug}`);
  },

  getCareerById: async (id) => {
    return await request(`/careers/${id}`);
  },

  getCategories: async () => {
    return await request('/categories');
  },

  getSubjects: async (categoryId = '') => {
    const endpoint = categoryId ? `/subjects?category=${categoryId}` : '/subjects';
    return await request(endpoint);
  },

  getSkills: async (categoryId = '', level = '') => {
    const params = new URLSearchParams();
    if (categoryId) params.append('category', categoryId);
    if (level) params.append('level', level);
    const query = params.toString();
    return await request(`/skills${query ? `?${query}` : ''}`);
  },

  getAlternativeCareers: async (careerId) => {
    return await request(`/alternative-careers/${careerId}`);
  },
};

export default careerService;
