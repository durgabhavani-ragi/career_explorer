import React from 'react';
import { Search, RotateCcw, Filter } from 'lucide-react';

const CareerFilter = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  categories = [],
  onReset,
}) => {
  return (
    <div
      className="editorial-card"
      style={{
        padding: '16px 20px',
        marginBottom: '28px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Search Input */}
      <div style={{ flex: '1 1 280px', position: 'relative' }}>
        <Search
          size={16}
          color="var(--text-muted, #71717a)"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Search careers by title, skills, or keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', paddingLeft: '38px', height: '40px' }}
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
          style={{ width: '100%', height: '40px' }}
          aria-label="Filter by industry category"
        >
          <option value="">All Categories ({categories.length})</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Filters */}
      {(search || selectedCategory) && (
        <button
          onClick={onReset}
          className="btn btn-secondary btn-sm"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            height: '40px',
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
