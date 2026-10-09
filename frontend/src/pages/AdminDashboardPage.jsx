import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import Modal from '../components/common/Modal';
import LoadingSpinner from '../components/common/LoadingSpinner';
import StatusBadge from '../components/common/StatusBadge';
import SalaryDisplay from '../components/common/SalaryDisplay';
import { Shield, Plus, Trash2, Folder, BookOpen, Award, Layers, Users, IndianRupee } from 'lucide-react';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('careers'); // 'careers' | 'categories' | 'subjects' | 'skills' | 'roadmaps' | 'users'

  const [careers, setCareers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'category' | 'subject' | 'skill' | 'career' | 'roadmap'
  const [formData, setFormData] = useState({});

  const reloadData = async () => {
    setLoading(true);
    try {
      const [catRes, subRes, skillRes, carRes, roadRes, userRes] = await Promise.allSettled([
        careerService.getCategories(),
        careerService.getSubjects(),
        careerService.getSkills(),
        careerService.getCareers(),
        roadmapService.getRoadmaps(),
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
    setFormData(type === 'career' ? { salaryRange: { currency: 'INR' } } : {});
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
      }
      setIsModalOpen(false);
      reloadData();
    } catch (err) {
      alert(`Error saving item: ${err.message}`);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    try {
      await adminService.deleteCategory(id);
      reloadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleDeleteCareer = async (id) => {
    if (!window.confirm('Are you sure you want to delete this career profile?')) return;
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
    if (!window.confirm('Are you sure you want to delete this user account?')) return;
    try {
      await adminService.deleteUser(userId);
      reloadData();
    } catch (e) {
      alert(e.message);
    }
  };

  const tabButtonStyle = (tabName) => ({
    padding: '8px 16px',
    fontSize: '0.88rem',
    fontWeight: activeTab === tabName ? 700 : 500,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid',
    borderColor: activeTab === tabName ? 'var(--primary, #18181b)' : 'var(--border-color, #e4e4e7)',
    backgroundColor: activeTab === tabName ? 'var(--primary, #18181b)' : '#ffffff',
    color: activeTab === tabName ? '#ffffff' : 'var(--text-main, #18181b)',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 64px 20px' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', marginBottom: '4px' }}>
          <Shield size={16} />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Administrative Console
          </span>
        </div>
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: 'var(--text-main, #18181b)',
            letterSpacing: '-0.03em',
          }}
        >
          Portal Management
        </h1>
        <p style={{ color: 'var(--text-muted, #71717a)', fontSize: '0.92rem', marginTop: '4px' }}>
          Manage database records for Careers, Categories, Subjects, Skills, Roadmaps, and Accounts in MongoDB Atlas.
        </p>
      </div>

      {/* Admin Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '28px',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '16px',
        }}
      >
        <button onClick={() => setActiveTab('careers')} style={tabButtonStyle('careers')}>
          Careers ({careers.length})
        </button>
        <button onClick={() => setActiveTab('categories')} style={tabButtonStyle('categories')}>
          Categories ({categories.length})
        </button>
        <button onClick={() => setActiveTab('subjects')} style={tabButtonStyle('subjects')}>
          Subjects ({subjects.length})
        </button>
        <button onClick={() => setActiveTab('skills')} style={tabButtonStyle('skills')}>
          Skills ({skills.length})
        </button>
        <button onClick={() => setActiveTab('roadmaps')} style={tabButtonStyle('roadmaps')}>
          Roadmaps ({roadmaps.length})
        </button>
        <button onClick={() => setActiveTab('users')} style={tabButtonStyle('users')}>
          User Accounts ({usersList.length})
        </button>
      </div>

      {loading ? (
        <LoadingSpinner message="Fetching administration records from MongoDB Atlas..." />
      ) : (
        <div>
          {/* TAB 1: CAREERS */}
          {activeTab === 'careers' && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Career Profiles
                  </h3>
                </div>
                <button onClick={() => openAddModal('career')} className="btn btn-primary btn-sm">
                  <Plus size={14} /> Add New Career
                </button>
              </div>

              {careers.length === 0 ? (
                <div className="editorial-card" style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No career profiles currently stored in MongoDB Atlas.
                </div>
              ) : (
                <div className="editorial-table-wrapper">
                  <table className="editorial-table">
                    <thead>
                      <tr>
                        <th>Career Title</th>
                        <th>Category</th>
                        <th>Salary</th>
                        <th>Outlook</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {careers.map((car) => (
                        <tr key={car._id}>
                          <td>
                            <strong>{car.title}</strong>
                          </td>
                          <td>
                            <span style={{ color: 'var(--text-muted)' }}>
                              {car.category?.name || 'Unassigned'}
                            </span>
                          </td>
                          <td>
                            <SalaryDisplay salaryRange={car.salaryRange} compact={true} />
                          </td>
                          <td>
                            <StatusBadge text={car.jobOutlook} />
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <button
                              onClick={() => handleDeleteCareer(car._id)}
                              className="btn btn-danger btn-sm"
                              title="Delete career"
                            >
                              <Trash2 size={13} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CATEGORIES */}
          {activeTab === 'categories' && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Industry Categories
                </h3>
                <button onClick={() => openAddModal('category')} className="btn btn-primary btn-sm">
                  <Plus size={14} /> Add Category
                </button>
              </div>

              <div className="grid-3">
                {categories.map((cat) => (
                  <div
                    key={cat._id}
                    className="editorial-card"
                    style={{
                      padding: '20px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{cat.name}</h4>
                      <button
                        onClick={() => handleDeleteCategory(cat._id)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: '4px 8px' }}
                        title="Delete category"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', flex: 1 }}>
                      {cat.description || 'No description provided.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SUBJECTS */}
          {activeTab === 'subjects' && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Academic Subjects
                </h3>
                <button onClick={() => openAddModal('subject')} className="btn btn-primary btn-sm">
                  <Plus size={14} /> Add Subject
                </button>
              </div>

              <div className="grid-3">
                {subjects.map((sub) => (
                  <div key={sub._id} className="editorial-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{sub.name}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '6px' }}>
                      {sub.description || 'No description provided.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Skills & Competencies
                </h3>
                <button onClick={() => openAddModal('skill')} className="btn btn-primary btn-sm">
                  <Plus size={14} /> Add Skill
                </button>
              </div>

              <div className="grid-3">
                {skills.map((sk) => (
                  <div key={sk._id} className="editorial-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{sk.name}</h4>
                      <StatusBadge text={sk.level} />
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {sk.description || 'No description provided.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ROADMAPS */}
          {activeTab === 'roadmaps' && (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Published Roadmaps
                </h3>
                <button onClick={() => openAddModal('roadmap')} className="btn btn-primary btn-sm">
                  <Plus size={14} /> Create Roadmap
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {roadmaps.map((rd) => (
                  <div key={rd._id} className="editorial-card" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                        {rd.title}
                      </h4>
                      <span className="badge badge-default">
                        {rd.steps?.length || 0} Steps
                      </span>
                    </div>
                    {rd.description && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '6px' }}>
                        {rd.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: USERS */}
          {activeTab === 'users' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px' }}>
                User Accounts
              </h3>

              <div className="editorial-table-wrapper">
                <table className="editorial-table">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Email Address</th>
                      <th>Role</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList.map((u) => (
                      <tr key={u._id}>
                        <td>
                          <strong>{u.name}</strong>
                        </td>
                        <td>
                          <span style={{ color: 'var(--text-muted)' }}>{u.email}</span>
                        </td>
                        <td>
                          <StatusBadge text={u.role} />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            <button
                              onClick={() => handleToggleUserRole(u._id, u.role)}
                              className="btn btn-secondary btn-sm"
                            >
                              Toggle Role
                            </button>
                            <button
                              onClick={() => handleDeleteUser(u._id)}
                              className="btn btn-danger btn-sm"
                              title="Delete user"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Admin Item Creation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Add New ${modalType.toUpperCase()}`}
      >
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
                  placeholder="e.g. Technology & Engineering"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  placeholder="Category overview and domain scope..."
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
                  placeholder="Academic syllabus or focus area..."
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
                  placeholder="e.g. React.js, Python, System Design"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Proficiency Level</label>
                <select
                  className="form-select"
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                >
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
                  placeholder="e.g. Full Stack Developer"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Industry Category</label>
                <select
                  className="form-select"
                  required
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select a Category</option>
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
                  placeholder="Overview of core duties and daily work..."
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Min Salary (₹ / yr)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g. 600000"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        salaryRange: {
                          ...formData.salaryRange,
                          min: Number(e.target.value),
                          currency: 'INR',
                        },
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Max Salary (₹ / yr)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g. 1500000"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        salaryRange: {
                          ...formData.salaryRange,
                          max: Number(e.target.value),
                          currency: 'INR',
                        },
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Job Market Outlook</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. High Growth, Stable Demand"
                  onChange={(e) => setFormData({ ...formData, jobOutlook: e.target.value })}
                />
              </div>
            </>
          )}

          {/* ROADMAP FORM */}
          {modalType === 'roadmap' && (
            <>
              <div className="form-group">
                <label className="form-label">Associated Career</label>
                <select
                  className="form-select"
                  required
                  onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                >
                  <option value="">Select Career Profile</option>
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
                  placeholder="e.g. Complete Engineering Learning Path"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Roadmap Description</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  placeholder="Brief learning pathway objectives..."
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '16px', height: '42px' }}
          >
            Save Record to MongoDB
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminDashboardPage;
