'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationCard from '../destinationApi/page'; // Ensure the correct path
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

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
