'use client';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import DestinationAPI from '../components/DestinationAPI'; // Updated path
import RightArrow from '@/public/assets/rightarrow.png';
import LeftArrow from '@/public/assets/leftarrow.png';
import Image from 'next/image';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setDestinations(response.data.products);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="md:w-[90%] w-[90%] mx-auto my-5">
      <h3 className="text-[#F85E9F] font-semibold text-[15px]">CHOOSE YOUR NEXT DESTINATION</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center my-3">
        <h2 className="font-semibold text-[30px] mt-2">Explore top destination</h2>
        <div className="flex justify-end gap-5 items-center mt-8 md:mt-0">
          <Image
            src={LeftArrow}
            alt="LeftArrow"
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <Image
            src={RightArrow}
            alt="RightArrow"
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <div className="destinations">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          slidesPerView={1}
          spaceBetween={25}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {destinations.slice(0, 15).map((destination) => (
            <SwiperSlide key={destination.id}>
              <DestinationAPI destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Destinations;
