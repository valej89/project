import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="mt-3 text-white">Nuestros Productos</h1>
      <div class="container py-5">
        <div class="row justify-content-center">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
    
  );
}

export default Cards;