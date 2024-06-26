import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseHeartFill } from "react-icons/bs";

function ProductCard({ id, image, title, price, }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <Link to={`/Detail/${id}`}> {/* Pass the id as a parameter to the detail page route */}
        <button>View Details</button>
      </Link>
      <BsFillHouseHeartFill className='like' onClick={() => { alert("Liked Successfully"); }} />
    </div>
  );
}

function ProductCards() {
  const [priceFilter, setPriceFilter] = useState(null);
  const [cityFilter, setCityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [roomsFilter, setRoomsFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [areaFilter, setAreaFilter] = useState('');

  const products = [
    {
      id: 1,
      image: 'https://housing-images.n7net.in/012c1500/1e4086cf1d69ead051e0b6d2d25277c2/v0/fs.jpeg',
      title: 'Vardan Sky',
      price: '50 Lakhs',
      city : 'Ahmedabad',
      status : 'sale',
      time : 'New Launch',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '2 BHK',
      type:'flat',
      area : '1377.00 sq.ft',
    },
    {
      id: 2,
      image: 'https://housing-images.n7net.in/4f2250e8/43810102fab0e69010c15ff1ef4ea06b/v0/large/pacifica_aurum_villas_phase_2-pudupakkam_tamil_nadu-chennai-pacifica_builders_pvt_ltd.jpeg',
      title: 'Pacifica Aurum Villas',
      price: '3 Cr',
      city: 'Chennai',
      status: 'sale',
      time : 'One Month Ago',
      amenities : 'Childrens Play Area , Parking , CCTV',
      rooms : '5 BHK',
      type:'villa',
      area : '3812.00 sq.ft'
    },
    {
      id: 3,
      image: 'https://housing-images.n7net.in/01c16c28/58f481a0a38b3b0607580af98f0150dd/v0/fs/3_bhk_apartment-for-rent-wadala_east-Mumbai-living_room.jpg',
      title: 'Ajmera Julian Alps',
      price: '18000/month',
      city: 'Mumbai',
      status: 'rent', 
      time : 'Two Months Ago',
      amenities : 'Childrens Play Area',
      rooms : '3 BHK',
      type:'flat',
      area : '1150 sq.ft',
    },
    {
      id: 4,
      image: 'https://housing-images.n7net.in/4f2250e8/3dcb1d9aa5d845defe649b92dca6fb7e/v0/fs-large/vbhc_springwater-devkhope-mumbai-vbhc_value_homes_pvt_ltd.jpeg',
      title: 'VBHC Springwater',
      price: '20 Lakhs',
      city: 'Mumbai',
      status: 'Sale', 
      time : 'New Launch',
      amenities : 'parking , CCTV',
      rooms : '1 BHK',
      type:'flat',
      area : '429.00 sq.ft',
    },
    {
      id: 5,
      image: 'https://housing-images.n7net.in/012c1500/6f5d5e73694537131cd31e9a73c9c6d6/v0/fs.jpeg',
      title: 'Krishna Homes',
      price: '65 Lakhs',
      city: 'Delhi',
      status: 'sale', 
      time : 'One Months Ago',
      amenities : 'CCTV',
      rooms : '4 BHK',
      type:'apartment',
      area : '1250.00 sq.ft',
    },
    {
      id: 6,
      image: 'https://housing-images.n7net.in/4f2250e8/0d7a87bc4f02894063e24cd7441f9aaa/v0/large/jrc_sanzio-sarjapur-bengaluru-jrc_projects_pvt_ltd.png',
      title: 'JRC Sanzio',
      price: '2 Cr',
      city: 'Bangalore',
      status: 'sale', 
      time : 'New Launch',
      amenities : 'Childrens Play Area, parking , CCTV , Solar Lighting',
      rooms : '3 BHK',
      type: 'villa',
      area : '2192.00 sq.ft',
    },
    {
      id: 7,
      image: 'https://housing-images.n7net.in/012c1500/a5051ba8baa3e022be734cdc37b07b66/v0/fs.jpg',
      title: 'Bakeri Sarvesh',
      price: '11500/month',
      city: 'Ahmedabad',
      status: 'Rent', 
      time : 'One Months Ago',
      amenities : 'Childrens Play Area, parking , CCTV',
      rooms : '2 BHK',
      type:'flat',
      area : '1100 sq.ft',
    },
    {
      id: 8,
      image: '../img/banner.jpg',
      title: 'Home 8',
      price: '45 Lakhs',
      city: 'Pune',
      status: 'rent', 
      time : 'Seven Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
    {
      id: 9,
      image: '../img/banner.jpg',
      title: 'Home 9',
      price: '45 Lakhs',
      city: 'Jaipur',
      status: 'sale', 
      time : 'Eight Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'villa',
      area : '90 sq. feet',
    },
    {
      id: 10,
      image: '../img/banner.jpg',
      title: 'Home 10',
      price: '45 Lakhs',
      city: 'Lucknow',
      status: 'rent', 
      time : 'Nine Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 11,
      image: '../img/banner.jpg',
      title: 'Home 11',
      price: '45 Lakhs',
      city: 'Kanpur',
      status: 'sale', 
      time : 'Ten Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'farmhouse',
      area : '90 sq. feet',
    },
    {
      id: 12,
      image: '../img/banner.jpg',
      title: 'Home 12',
      price: '45 Lakhs',
      city: 'Nagpur',
      status: 'rent', 
      time : 'Eleven Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
    {
      id: 13,
      image: '../img/banner.jpg',
      title: 'Home 13',
      price: '40 Lakhs',
      city: 'Indore',
      status: 'sale', 
      time : 'One Year Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'villa',
      area : '90 sq. feet',
    },
    {
      id: 14,
      image: '../img/banner.jpg',
      title: 'Home 14',
      price: '27 Lakhs',
      city: 'Thane',
      status: 'rent', 
      time : 'One Year and One Month Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'flat',
      area : '90 sq. feet',
    },
    {
      id: 15,
      image: '../img/banner.jpg',
      title: 'Home 15',
      price: '35 Lakhs',
      city: 'Bhopal',
      status: 'sale', 
      time : 'One Year and Two Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'farmhouse',
      area : '90 sq. feet',
    },
    {
      id: 16,
      image: '../img/banner.jpg',
      title: 'Home 16',
      price: '45 Lakhs',
      city: 'Visakhapatnam',
      status: 'rent', 
      time : 'One Year and Three Months Ago',
      amenities : 'garden , parking , gym',
      rooms : '3bhk',
      type:'bunglow',
      area : '90 sq. feet',
    },
  ];
  

  const handleApplyFilter = () => {
    if (inputValue < 100000) {
      alert("Please enter valid amount");
      return;
    }
    setPriceFilter(inputValue);
  };
  

  const handleResetFilter = () => {
    setPriceFilter(null);
    setInputValue('');
    setCityFilter('');
    setStatusFilter('');
    setTimeFilter('');
    setAmenitiesFilter([]);
    setRoomsFilter('');
    setTypeFilter('');
    setAreaFilter('');
  };

  const filteredProducts = products.filter(product => {
    const priceNumber = Number(product.price.replace(/[^0-9.-]+/g, ""));
    const priceUnit = product.price.replace(/[0-9]/g, '').trim();

    let priceCondition = true;
    if (priceFilter) {
      switch (priceUnit) {
        case 'Lakhs':
          priceCondition = priceNumber * 100000 <= priceFilter;
          break;
        case 'Cr':
          priceCondition = priceNumber * 10000000 <= priceFilter;
          break;
        default:
          priceCondition = true;
      }
    }

    const cityCondition = cityFilter ? product.city.toLowerCase() === cityFilter.toLowerCase() : true;
    const statusCondition = statusFilter ? product.status.toLowerCase() === statusFilter.toLowerCase() : true;
    const timeCondition = timeFilter ? product.time.toLowerCase() === timeFilter.toLowerCase() : true;
    const amenitiesCondition = amenitiesFilter.every(amenity => product.amenities.includes(amenity));
    const roomsCondition = roomsFilter ? product.rooms === roomsFilter : true;
    const typeCondition = typeFilter ? product.type === typeFilter : true;
    const areaCondition = areaFilter ? product.area === areaFilter : true;
    
    return priceCondition && cityCondition && statusCondition && timeCondition && amenitiesCondition && roomsCondition && typeCondition && areaCondition;
  });

  function toggleAmenityFilter(amenity) {
    setAmenitiesFilter(prevFilters => {
      if (prevFilters.includes(amenity)) {
        return prevFilters.filter(filter => filter !== amenity);
      } else {
        return [...prevFilters, amenity];
      }
    });
  }
  
  
  return (
    <>
      <div className="filter-container">
      <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Max Price"/> 
        <select value={cityFilter} onChange={e => setCityFilter(e.target.value)}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Mumbai">Mumbai</option>
          {/* Add more cities as needed */}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        <select value={timeFilter} onChange={e => setTimeFilter(e.target.value)}>
          <option value="">All Times</option>
          <option value="New Launch">New Launch</option>
          <option value="One Month Ago">One Month Ago</option>
          {/* Add more time options as needed */}
        </select>
        {/* Checkbox for amenities */}
        <div className="amenities-checkboxes">
          <label>Amenities :</label>
          <label>
            <input type="checkbox" value="parking" checked={amenitiesFilter.includes("parking")} onChange={e => toggleAmenityFilter(e.target.value)} />
             Parking
          </label>
          <label>
            <input type="checkbox" value="CCTV" checked={amenitiesFilter.includes("CCTV")} onChange={e => toggleAmenityFilter(e.target.value)} />
             CCTV
          </label>
          <label>
            <input type="checkbox" value="Solar Lighting" checked={amenitiesFilter.includes("Solar Lighting")} onChange={e => toggleAmenityFilter(e.target.value)} />
             Solar Lighting
          </label>
          <label>
            <input type="checkbox" value="Childrens Play Area" checked={amenitiesFilter.includes("Childrens Play Area")} onChange={e => toggleAmenityFilter(e.target.value)} />
            Childrens Play Area
          </label>
          <select value={roomsFilter} onChange={e => setRoomsFilter(e.target.value)}>
          <option value="">All Rooms</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4 BHK">4 BHK</option>
          <option value="5 BHK">5 BHK</option>
          {/* Add more room options as needed */}
        </select>
        <pre>               </pre>
        <div>
        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="flat">Flat</option>
          <option value="apartment">Apartment</option>
          <option value="farmhouse">Farmhouse</option>
          <option value="bunglow">Bunglow</option>
          <option value="villa">Villa</option>
          {/* Add more type options as needed */}
        </select>
        </div>
        <pre>               </pre>
        <div>
        <select value={areaFilter} onChange={e => setAreaFilter(e.target.value)}>
          <option value="">Select Area</option>
          <option value="50 sq.ft">50 sq.ft</option>
          {/* Add more options as needed */}
        </select>
        </div>
        </div>
        <button onClick={handleApplyFilter}>Apply Filter</button>
        <button onClick={handleResetFilter}>Reset Filter</button>
      </div>
      <div className="product-cards">
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
    </>
  );
}

export default ProductCards;
