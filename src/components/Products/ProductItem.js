import React from 'react';

function ProductItem(props) {
  return (
    <>
      <div class="col-md-8 col-lg-6 col-xl-4 mt-4">
        <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src={props.imagesItem}
            class="card-img-top" alt="Funko-1" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">{props.titleItem}</h5>
              <p class="text-muted mb-4">{props.descriptionItem}</p>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span className="">${props.amountItem}</span><span><img src="./images/add-shopping-cart.png"/></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;