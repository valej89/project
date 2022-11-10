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

        {productsItems.length === 0 ?
            <div className="w-25 p-3" >
              <img src="./images/no_data.svg" className='img-fluid max-width: 10%'/>
                <p className="mt-3 font-weight-bold text-white">No se encontraron resultados.</p> {/* //mejorar estilo de parrafo */}
            </div> :

          productsItems.map((prodItem, index) => (
            <ProductItem key={index}
              titleItem={prodItem.title}
              amountItem={prodItem.amount}
              descriptionItem={prodItem.description}
              imagesItem={prodItem.images}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default ProductsList;