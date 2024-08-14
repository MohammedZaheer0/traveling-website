'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

const DestinationCard = ({ destination }) => {
  if (!destination) return null;

  return (
    <div className="destination-card md:mt-6 mt-3 h-[590px] mb-2 relative rounded-lg w-full mx-auto">
      <Image
        src={destination.thumbnail}
        alt={destination.title}
        width={300}
        height={200}
        priority
      />
      <h1 className='font-bold my-4 text-[20px] text-left'>{destination.title}</h1>
      <p className='text-left text-[13px]'>{destination.description}</p>
      <h3 className='text-[13px] font-medium text-left my-3'>
        Warranty Information: {destination.warrantyInformation}
      </h3>
      <span className='absolute top-3 right-2 bg-[#8e8e8e] text-white flex items-center py-1 px-2 border-[1px] border-[lightgray] rounded-full text-[12px]'>
        <span className='text-[#FFCD6B] mr-1'><FaStar /></span> {destination.rating}
      </span>
      <div className='flex justify-between items-center gap-2 mt-4'>
        <span>
          Price: <span className='text-red-600 font-medium'>{destination.price}</span>
        </span>
        <button className='text-white px-4 py-2 rounded-full text-[15px] seemorebg'>
          See More
        </button>
      </div>
    </div>
  );
};

const FilterData = ({ category }) => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestination, setFilteredDestination] = useState([]);

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

  useEffect(() => {
    if (category === 'all') {
      setFilteredDestination(destinations);
    } else {
      setFilteredDestination(destinations.filter(destination => destination.category === category));
    }
  }, [category, destinations]);

  return (
    <div className="destinations">
      {filteredDestination.slice(0,15).map(destination => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default FilterData;
