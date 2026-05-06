import React from 'react';

const BrandLogo = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`brand-logo rounded-xl bg-gradient-accent text-white font-bold flex items-center justify-center ${className}`}
    >
      PN
    </div>
  );
};

export default BrandLogo;
