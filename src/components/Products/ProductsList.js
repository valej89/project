import React from 'react';
import '../UI/Cards';
import ProductItem from './ProductItem';

function ProductsList(props) {
  const productsItems = props.productsItems;

  return (
    <div className='cards'>
      <h1 className="mt-3 text-white">Nuestros Productos</h1>
      <div class="container py-5">
        <div class="row justify-content-center">
          {productsItems.map((prodItem, index) => (
            <ProductItem key={index} //el index sugiere que sea el id que viene del be o el mock en este caso
              titleItem={prodItem.title}
              amountItem={prodItem.amount}
              descriptionItem={prodItem.description}
              imagesItem={prodItem.images} />
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default ProductsList;