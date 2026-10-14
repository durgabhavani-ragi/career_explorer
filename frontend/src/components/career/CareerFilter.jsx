import React from 'react';
import { Search, RotateCcw, Filter, Folder, TrendingUp } from 'lucide-react';

const CareerFilter = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedDemand,
  setSelectedDemand,
  categories = [],
  onReset,
}) => {
  return (
    <div
      className="editorial-card"
      style={{
        padding: '16px 20px',
        marginBottom: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
      }}
    >
      {/* Search Input */}
      <div style={{ flex: '1 1 280px', position: 'relative' }}>
        <Search
          size={16}
          color="var(--text-muted)"
          style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Search careers by title, skills, or responsibilities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', paddingLeft: '40px', height: '42px' }}
        />
      </div>

      {/* Category Dropdown */}
      <div
        style={{
          flex: '0 1 240px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'relative',
        }}
      >
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ width: '100%', height: '42px' }}
          aria-label="Filter by industry category"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Market Demand Filter */}
      {setSelectedDemand && (
        <div style={{ flex: '0 1 180px' }}>
          <select
            className="form-select"
            value={selectedDemand || ''}
            onChange={(e) => setSelectedDemand(e.target.value)}
            style={{ width: '100%', height: '42px' }}
            aria-label="Filter by market demand"
          >
            <option value="">All Demand Levels</option>
            <option value="High">High Demand</option>
            <option value="Stable">Stable Demand</option>
            <option value="Emerging">Emerging Demand</option>
          </select>
        </div>
      )}

      {/* Reset Filters */}
      {(search || selectedCategory || selectedDemand) && (
        <button
          onClick={onReset}
          className="btn btn-secondary btn-sm"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            height: '42px',
          }}
          title="Reset search and filters"
        >
          <RotateCcw size={14} />
          <span>Reset</span>
        </button>
      )}
    </div>
  );
};

export default CareerFilter;
