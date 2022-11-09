import React from 'react';
//import { Button } from './Button';
import './Banner.css';

function Banner() {
  return (
    <section className="hero-banner bg-light py-5">
    <div className="container">
        <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
                <img src="./images/background.svg" className="img-fluid" alt="Web Store"/>
            </div>
            <div className="col-lg-6">
                <h1 className="mt-3">Friki Store</h1>
                <p className="lead text-secondary my-5">Un paraíso de regalos frikis de tus series, películas y videojuegos favoritos. Somos una tienda online con más de 800 productos exclusivos y de la mejor calidad.</p>
                <a href="#" className="btn btn-outline-secondary btn-lg border">Ver Catálogo</a>
            </div>
        </div>
    </div>
</section>
  );
}

export default Banner;