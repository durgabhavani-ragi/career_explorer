import request from './api';

export const adminService = {
  // Categories
  createCategory: (data) => request('/categories', { method: 'POST', body: data }),
  updateCategory: (id, data) => request(`/categories/${id}`, { method: 'PUT', body: data }),
  deleteCategory: (id) => request(`/categories/${id}`, { method: 'DELETE' }),

  // Subjects
  createSubject: (data) => request('/subjects', { method: 'POST', body: data }),
  updateSubject: (id, data) => request(`/subjects/${id}`, { method: 'PUT', body: data }),
  deleteSubject: (id) => request(`/subjects/${id}`, { method: 'DELETE' }),

  // Skills
  createSkill: (data) => request('/skills', { method: 'POST', body: data }),
  updateSkill: (id, data) => request(`/skills/${id}`, { method: 'PUT', body: data }),
  deleteSkill: (id) => request(`/skills/${id}`, { method: 'DELETE' }),

  // Careers
  createCareer: (data) => request('/careers', { method: 'POST', body: data }),
  updateCareer: (id, data) => request(`/careers/${id}`, { method: 'PUT', body: data }),
  deleteCareer: (id) => request(`/careers/${id}`, { method: 'DELETE' }),

  // Roadmaps
  createRoadmap: (data) => request('/roadmaps', { method: 'POST', body: data }),
  updateRoadmap: (id, data) => request(`/roadmaps/${id}`, { method: 'PUT', body: data }),
  deleteRoadmap: (id) => request(`/roadmaps/${id}`, { method: 'DELETE' }),

  // Alternative Careers
  addAlternativeCareer: (data) => request('/alternative-careers', { method: 'POST', body: data }),
  deleteAlternativeCareer: (id) => request(`/alternative-careers/${id}`, { method: 'DELETE' }),

  // Users Admin Management
  getUsers: () => request('/users'),
  updateUserRole: (id, role) => request(`/users/${id}/role`, { method: 'PUT', body: { role } }),
  deleteUser: (id) => request(`/users/${id}`, { method: 'DELETE' }),
};

export default adminService;
