import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";

function ProductCard({ id, image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/Detail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={()=>{alert("Liked Successfully");}}/>
    </div>
  );
}

function ProductCards() {
  const [priceFilter, setPriceFilter] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const products = [
    {
      id: 1,
      image: '../img/banner.jpg',
      title: 'Home 1',
      price: '25 Lakhs',
      city : 'Ahmedabad',
      status : 'sale',
      time : 'New Launch',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 2,
      image: '../img/banner.jpg',
      title: 'Home 2',
      price: '5 thousand/month',
      status: 'rent',
      amenities : 'garden , clun house',
      rooms : '1bhk',
      type:'apartment',
      area : '50 sq. feet'
    },
    {
      id: 3,
      image: '../img/banner.jpg',
      title: 'Home 3',
      price: '45 Lakhs',
      time : '2nd Hand',
      type:'farmhouse',
    },
    {
      id: 4,
      image: '../img/banner.jpg',
      title: 'Home 4',
      price: '45 Lakhs',
      type:'bunglow',
    },
    {
      id: 5,
      image: '../img/banner.jpg',
      title: 'Home 5',
      price: '45 Lakhs',
      type:'villa',
    },
    {
      id: 6,
      image: '../img/banner.jpg',
      title: 'Home 6',
      price: '45 Lakhs',
    },
    {
      id: 7,
      image: '../img/banner.jpg',
      title: 'Home 7',
      price: '45 Lakhs',
    },
    {
      id: 8,
      image: '../img/banner.jpg',
      title: 'Home 8',
      price: '45 Lakhs',
    },
    {
      id: 9,
      image: '../img/banner.jpg',
      title: 'Home 9',
      price: '45 Lakhs',
    },
    {
      id: 10,
      image: '../img/banner.jpg',
      title: 'Home 10',
      price: '45 Lakhs',
    },
    {
      id: 11,
      image: '../img/banner.jpg',
      title: 'Home 11',
      price: '45 Lakhs',
    },
    {
      id: 12,
      image: '../img/banner.jpg',
      title: 'Home 12',
      price: '45 Lakhs',
    },
    {
      id: 13,
      image: '../img/banner.jpg',
      title: 'Home 13',
      price: '40 Lakhs',
    },
    {
      id: 14,
      image: '../img/banner.jpg',
      title: 'Home 14',
      price: '27 Lakhs',
    },
    {
      id: 15,
      image: '../img/banner.jpg',
      title: 'Home 15',
      price: '35 Lakhs',
    },
    {
      id: 16,
      image: '../img/banner.jpg',
      title: 'Home 16',
      price: '45 Lakhs',
    },
  ];

  const handleApplyFilter = () => {
    setPriceFilter(inputValue);
  };

  const handleResetFilter = () => {
    setPriceFilter(null);
    setInputValue('');
  };

  const filteredProducts = priceFilter 
    ? products.filter(product => {
        const priceNumber = Number(product.price.replace(/[^0-9.-]+/g,""));
        const priceUnit = product.price.replace(/[0-9]/g, '').trim();

        switch(priceUnit) {
          case 'Lakhs':
            return priceNumber * 100000 <= priceFilter;
          case 'thousand/month':
            return priceNumber * 1000 <= priceFilter;
          case 'cr':
            return priceNumber * 10000000 <= priceFilter;
          default:
            return true;
        }
      })
    : products;

  return (
    <div className="product-cards">
      <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Max price" />
      <button onClick={handleApplyFilter}>Apply Filter</button>
      <button onClick={handleResetFilter}>Reset Filter</button>
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id} 
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductCards;
