import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">SGE</h1>
      <div className="header-options">
        <button className='btn btn-primary' type="submit"
            /* onClick={() => navigate()} */>Home</button>
        </div>
    </div>
  );
};
