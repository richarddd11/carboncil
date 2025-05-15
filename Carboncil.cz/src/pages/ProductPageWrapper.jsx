// src/pages/ProductPageWrapper.jsx
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';
import ProductPage from './ProductPage';
import ProductPageMobile from './ProductPageMobile';

const ProductPageWrapper = () => {
  const isMobile = useIsMobile(700);
  return isMobile ? <ProductPageMobile /> : <ProductPage />;
};

export default ProductPageWrapper;
