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
      className="glass-card"
      style={{
        padding: '20px',
        marginBottom: '32px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      {/* Search Input */}
      <div style={{ flex: '1 1 300px', position: 'relative' }}>
        <Search
          size={18}
          color="#94a3b8"
          style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Search by career title or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', paddingLeft: '40px' }}
        />
      </div>

      {/* Category Dropdown */}
      <div style={{ flex: '0 1 220px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Filter size={18} color="#94a3b8" />
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ width: '100%' }}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Filters */}
      {(search || selectedCategory) && (
        <button onClick={onReset} className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <RotateCcw size={14} />
          <span>Reset</span>
        </button>
      )}
    </div>
  );
};

export default CareerFilter;
