import React from 'react';
import ProductsList from './ProductsList';

function Products(props) {
  const products = props.products;
  return (
    <>
      <ProductsList productsItems={products}/>
    </>
  );
}

export default Products;