import React from 'react';
import { BRAND_LOGO_SRC } from '@/lib/brand.js';

const BrandLogo = ({ className = '', alt = '' }) => {
  return (
    <img
      src={BRAND_LOGO_SRC}
      alt={alt}
      className={`brand-logo ${className}`}
      decoding="async"
    />
  );
};

export default BrandLogo;
