import request from './api';

export const roadmapService = {
  getRoadmaps: async () => {
    return await request('/roadmaps');
  },

  getRoadmapByCareer: async (careerId) => {
    return await request(`/roadmaps/career/${careerId}`);
  },

  getSavedCareers: async () => {
    return await request('/saved-careers');
  },

  saveCareer: async (careerId, notes = '') => {
    return await request('/saved-careers', {
      method: 'POST',
      body: { careerId, notes },
    });
  },

  removeSavedCareer: async (careerId) => {
    return await request(`/saved-careers/${careerId}`, {
      method: 'DELETE',
    });
  },

  getUserProgress: async () => {
    return await request('/roadmap-progress');
  },

  getProgressByRoadmap: async (roadmapId) => {
    return await request(`/roadmap-progress/${roadmapId}`);
  },

  toggleStepProgress: async (roadmapId, stepNumber) => {
    return await request(`/roadmap-progress/${roadmapId}/toggle-step`, {
      method: 'POST',
      body: { stepNumber },
    });
  },
};

export default roadmapService;
