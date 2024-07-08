'use client'; // Add this line

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa";


// DestinationCard Component
const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card mt-8 h-[590px] mb-16 relative rounded-lg w-full">
      <Image src={destination.thumbnail} alt={destination.title} width={300} height={200} className=''/>
      <h1 className='font-bold my-4 text-[20px] text-left'>{destination.title}</h1>
      <p className='text-left text-[13px]'>{destination.description}</p>
      <h3 className='text-[13px] font-medium text-left my-3'>Warranty Information: {destination.warrantyInformation}</h3>
        <span className='absolute top-3 right-2 bg-[#8e8e8e] text-white flex items-center py-1 px-2 border-[1px] border-[lightgray] rounded-full text-[12px]'><span className='text-[#FFCD6B] mr-1'><FaStar /></span> {destination.rating}</span>
      <div className='flex justify-between items-center gap-2 mt-4'>
        <span>Price: <span className='text-red-600 font-medium'>{destination.price}</span></span>
        <button className='text-white px-4 py-2 rounded-full text-[15px]  seemorebg'>See More</button>
      </div>
    </div>
  );
};

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
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
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
            <DestinationCard destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Destinations;
