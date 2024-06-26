import React from 'react';
import { Link } from 'react-router-dom';

function Flat({ id, image, title, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/FlatDetail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
         <button>Like</button>
    </div>
  );
}

function Flats() {
  const products = [
    {
      id: 1,
      image: '../img/banner.jpg',
      title: 'Flat 1',
      description: '25 Lakhs',
    },
    {
      id: 2,
      image: '../img/banner.jpg',
      title: 'Flat 2',
      description: '35 Lakhs',
    },
    {
      id: 3,
      image: '../img/banner.jpg',
      title: 'Flat 3',
      description: '35 Lakhs',
    },
    {
      id: 4 ,
      image: '../img/banner.jpg',
      title: 'Flat 4',
      description: '45 Lakhs',
    },
    {
      id: 5,
      image: '../img/banner.jpg',
      title: 'Flat 5',
      description: '45 Lakhs',
    },
    {
      id: 6,
      image: '../img/banner.jpg',
      title: 'Flat 6',
      description: '45 Lakhs',
    },
    {
      id: 7,
      image: '../img/banner.jpg',
      title: 'Flat 7',
      description: '45 Lakhs',
    },
    {
      id: 8,
      image: '../img/banner.jpg',
      title: 'Flat 8',
      description: '45 Lakhs',
    },
    // Add other products with unique ids
  ];

  return (
    <div className="product-cards">
      {products.map((product, index) => (
        <Flat
          key={index}
          id={product.id} 
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default Flats;
