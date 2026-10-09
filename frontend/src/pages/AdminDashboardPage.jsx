import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import Modal from '../components/common/Modal';
import LoadingSpinner from '../components/common/LoadingSpinner';
import StatusBadge from '../components/common/StatusBadge';
import { Shield, Plus, Trash2, Edit3, Folder, BookOpen, Award, Layers, Users, GitFork } from 'lucide-react';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('careers'); // 'careers' | 'categories' | 'subjects' | 'skills' | 'roadmaps' | 'alternatives' | 'users'

  const [careers, setCareers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [altCareers, setAltCareers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'category' | 'subject' | 'skill' | 'career' | 'roadmap' | 'alternative'
  const [formData, setFormData] = useState({});

  const reloadData = async () => {
    setLoading(true);
    try {
      const [catRes, subRes, skillRes, carRes, roadRes, altRes, userRes] = await Promise.allSettled([
        careerService.getCategories(),
        careerService.getSubjects(),
        careerService.getSkills(),
        careerService.getCareers(),
        roadmapService.getRoadmaps(),
        careerService.getAlternativeCareers('all').catch(() => ({ success: true, data: [] })),
        adminService.getUsers(),
      ]);

      if (catRes.status === 'fulfilled' && catRes.value.success) setCategories(catRes.value.data || []);
      if (subRes.status === 'fulfilled' && subRes.value.success) setSubjects(subRes.value.data || []);
      if (skillRes.status === 'fulfilled' && skillRes.value.success) setSkills(skillRes.value.data || []);
      if (carRes.status === 'fulfilled' && carRes.value.success) setCareers(carRes.value.data || []);
      if (roadRes.status === 'fulfilled' && roadRes.value.success) setRoadmaps(roadRes.value.data || []);
      if (userRes.status === 'fulfilled' && userRes.value.success) setUsersList(userRes.value.data || []);
    } catch (err) {
      console.error('Failed to load admin data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reloadData();
  }, []);

  const openAddModal = (type) => {
    setModalType(type);
    setFormData({});
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalType === 'category') {
        await adminService.createCategory(formData);
      } else if (modalType === 'subject') {
        await adminService.createSubject(formData);
      } else if (modalType === 'skill') {
        await adminService.createSkill(formData);
      } else if (modalType === 'career') {
        await adminService.createCareer(formData);
      } else if (modalType === 'roadmap') {
        await adminService.createRoadmap(formData);
      } else if (modalType === 'alternative') {
        await adminService.addAlternativeCareer(formData);
      }
      setIsModalOpen(false);
      reloadData();
    } catch (err) {
      alert(`Error saving item: ${err.message}`);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Delete this category?')) return;
    try {
      await adminService.deleteCategory(id);
      reloadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleDeleteCareer = async (id) => {
    if (!window.confirm('Delete this career?')) return;
    try {
      await adminService.deleteCareer(id);
      reloadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleToggleUserRole = async (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    try {
      await adminService.updateUserRole(userId, newRole);
      reloadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Delete this user account?')) return;
    try {
      await adminService.deleteUser(userId);
      reloadData();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '10px', borderRadius: '12px', color: '#a78bfa' }}>
            <Shield size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc' }}>
              Admin <span className="gradient-text">Management Portal</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '2px' }}>
              Manage Careers, Categories, Subjects, Skills, Roadmaps, and User accounts in MongoDB.
            </p>
          </div>
        </div>
      </div>

      {/* Admin Tabs Bar */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px' }}>
        <button onClick={() => setActiveTab('careers')} className={`btn ${activeTab === 'careers' ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
          Careers ({careers.length})
        </button>
        <button onClick={() => setActiveTab('categories')} className={`btn ${activeTab === 'categories' ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
          Categories ({categories.length})
        </button>
        <button onClick={() => setActiveTab('subjects')} className={`btn ${activeTab === 'subjects' ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
          Subjects ({subjects.length})
        </button>
        <button onClick={() => setActiveTab('skills')} className={`btn ${activeTab === 'skills' ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
          Skills ({skills.length})
        </button>
        <button onClick={() => setActiveTab('roadmaps')} className={`btn ${activeTab === 'roadmaps' ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
          Roadmaps ({roadmaps.length})
        </button>
        <button onClick={() => setActiveTab('users')} className={`btn ${activeTab === 'users' ? 'btn-primary' : 'btn-secondary'} btn-sm`}>
          User Accounts ({usersList.length})
        </button>
      </div>

      {loading ? (
        <LoadingSpinner message="Fetching admin data from MongoDB..." />
      ) : (
        <div>
          {/* TAB 1: CAREERS */}
          {activeTab === 'careers' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>All Career Profiles</h3>
                <button onClick={() => openAddModal('career')} className="btn btn-primary btn-sm">
                  <Plus size={16} /> Add New Career
                </button>
              </div>
              {careers.length === 0 ? (
                <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No careers in MongoDB Atlas. Click 'Add New Career' to create one.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {careers.map((car) => (
                    <div key={car._id} className="glass-card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>{car.title}</h4>
                        <span style={{ fontSize: '0.85rem', color: '#818cf8' }}>{car.category?.name || 'Category'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <StatusBadge text={car.jobOutlook} />
                        <button onClick={() => handleDeleteCareer(car._id)} className="btn btn-danger btn-sm">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CATEGORIES */}
          {activeTab === 'categories' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>Categories</h3>
                <button onClick={() => openAddModal('category')} className="btn btn-primary btn-sm">
                  <Plus size={16} /> Add Category
                </button>
              </div>
              <div className="grid-3">
                {categories.map((cat) => (
                  <div key={cat._id} className="glass-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>{cat.name}</h4>
                      <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{cat.description}</p>
                    </div>
                    <button onClick={() => handleDeleteCategory(cat._id)} className="btn btn-danger btn-sm">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SUBJECTS */}
          {activeTab === 'subjects' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>Domain Subjects</h3>
                <button onClick={() => openAddModal('subject')} className="btn btn-primary btn-sm">
                  <Plus size={16} /> Add Subject
                </button>
              </div>
              <div className="grid-3">
                {subjects.map((sub) => (
                  <div key={sub._id} className="glass-card" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>{sub.name}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>Skills</h3>
                <button onClick={() => openAddModal('skill')} className="btn btn-primary btn-sm">
                  <Plus size={16} /> Add Skill
                </button>
              </div>
              <div className="grid-3">
                {skills.map((sk) => (
                  <div key={sk._id} className="glass-card" style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>{sk.name}</h4>
                      <StatusBadge text={sk.level} />
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '6px' }}>{sk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ROADMAPS */}
          {activeTab === 'roadmaps' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>Roadmaps</h3>
                <button onClick={() => openAddModal('roadmap')} className="btn btn-primary btn-sm">
                  <Plus size={16} /> Create Roadmap
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {roadmaps.map((rd) => (
                  <div key={rd._id} className="glass-card" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>
                      {rd.title} ({rd.steps?.length || 0} Steps)
                    </h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>{rd.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: USERS */}
          {activeTab === 'users' && (
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '20px' }}>User Accounts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {usersList.map((u) => (
                  <div key={u._id} className="glass-card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#f8fafc', fontSize: '1rem', display: 'block' }}>{u.name}</strong>
                      <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{u.email}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <StatusBadge text={u.role} />
                      <button onClick={() => handleToggleUserRole(u._id, u.role)} className="btn btn-secondary btn-sm">
                        Toggle Role
                      </button>
                      <button onClick={() => handleDeleteUser(u._id)} className="btn btn-danger btn-sm">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Admin Item Creation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Add New ${modalType.toUpperCase()}`}>
        <form onSubmit={handleModalSubmit}>
          {/* CATEGORY FORM */}
          {modalType === 'category' && (
            <>
              <div className="form-group">
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="e.g. Software & Technology"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  placeholder="Category description..."
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </>
          )}

          {/* SUBJECT FORM */}
          {modalType === 'subject' && (
            <>
              <div className="form-group">
                <label className="form-label">Subject Name</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="e.g. Data Structures & Algorithms"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </>
          )}

          {/* SKILL FORM */}
          {modalType === 'skill' && (
            <>
              <div className="form-group">
                <label className="form-label">Skill Name</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="e.g. React.js"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Skill Level</label>
                <select className="form-select" onChange={(e) => setFormData({ ...formData, level: e.target.value })}>
                  <option value="All Levels">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </>
          )}

          {/* CAREER FORM */}
          {modalType === 'career' && (
            <>
              <div className="form-group">
                <label className="form-label">Career Title</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="e.g. Full Stack Web Developer"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" required onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  required
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Min Salary (USD)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="60000"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        salaryRange: { ...formData.salaryRange, min: Number(e.target.value) },
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Max Salary (USD)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="130000"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        salaryRange: { ...formData.salaryRange, max: Number(e.target.value) },
                      })
                    }
                  />
                </div>
              </div>
            </>
          )}

          {/* ROADMAP FORM */}
          {modalType === 'roadmap' && (
            <>
              <div className="form-group">
                <label className="form-label">Career</label>
                <select className="form-select" required onChange={(e) => setFormData({ ...formData, career: e.target.value })}>
                  <option value="">Select Career</option>
                  {careers.map((car) => (
                    <option key={car._id} value={car._id}>
                      {car.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Roadmap Title</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="e.g. Complete Full Stack Roadmap"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            Save Item to MongoDB
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminDashboardPage;
