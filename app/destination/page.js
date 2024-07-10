'use client'; // Add this line

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import DestinationAPI from '../destinationApi/page'


// Destinations Component
const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setDestinations(response.data.products);
        console.log(response.data.products)
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

    

  return (
    <div className="destinations">
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        // pagination={{ clickable: true }}
        // modules={[Pagination, Autoplay]}
        modules={[ Autoplay]}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween: 15,
          },
          1024:{
            slidesPerView:3,
            spaceBetween: 25,
          },
          1440:{
            slidesPerView:4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <DestinationAPI destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Destinations;
