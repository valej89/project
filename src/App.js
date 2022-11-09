import { useState } from 'react';
import './App.css';
import Banner from './components/Content/Banner';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';


const DUMMY_PRODUCTS = [
  {
    id: 'e1',
    title: 'Dr. Stranger',
    amount: 94,
    description: 'Descripciones Varias',
    images: "./images/funko-1.jpg"
  },
  { id: 'e2',
  title: 'The Godfather',
  amount: 92.14,
  description: 'Descripciones Varias',
  images: "./images/funko-2.jpg"
 },

  {
    id: 'e3',
    title: 'Lumine',
    amount: 94.12,
    description: 'Descripciones Varias',
    images: "./images/funko-3.jpg"
  },
  {
    id: 'e4',
    title: 'Dr. Stranger',
    amount: 89,
    description: 'Descripciones Varias',
    images: "./images/funko-1.jpg",
  },
  {
    id: 'e5',
    title: 'The Godfather',
    amount: 94.12,
    description: 'Descripciones Varias',
    images: "./images/funko-2.jpg",
  },
  {
    id: 'e6',
    title: 'Lumine',
    amount: 94.12,
    description: 'Descripciones Varias',
    images: "./images/funko-3.jpg",
  },
];


function App() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  return (
    <>
      <NavBar/>
      <Banner/>
      <Products products={products}/>
    </>
  );
}

export default App;
