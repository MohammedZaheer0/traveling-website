// 'use client';
// import React from 'react';
// import PropTypes from 'prop-types';
// import Image from 'next/image';
// import { FaStar } from "react-icons/fa";

// const DestinationAPI = ({ destination }) => {

//   if (!destination) {
//     return <div>No Destination Provided</div>;
//   }

//   return (
//     <div className="destination-card mt-8 h-[590px] mb-2 relative rounded-lg  mx-auto">
//       <Image src={destination.thumbnail} alt={destination.title} width={300} height={200} className=''/>
//       <h1 className='font-bold my-4 text-[20px] text-left'>{destination.title}</h1>
//       <p className='text-left text-[13px]'>{destination.description}</p>
//       <h3 className='text-[13px] font-medium text-left my-3'>Warranty Information: {destination.warrantyInformation}</h3>
//       <span className='absolute top-3 right-2 bg-[#8e8e8e] text-white flex items-center py-1 px-2 border-[1px] border-[lightgray] rounded-full text-[12px]'>
//         <span className='text-[#FFCD6B] mr-1'><FaStar /></span> {destination.rating}
//       </span>
//       <div className='flex justify-between items-center gap-2 mt-4'>
//         <span>Price: <span className='text-red-600 font-medium'>{destination.price}</span></span>
//         <button className='text-white px-4 py-2 rounded-full text-[15px]  seemorebg'>See More</button>
//       </div>
//     </div>
//   );
// };

// export default DestinationAPI;


'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

const DestinationAPI = ({ destination }) => {
  if (!destination) {
    return <div>No Destination Provided</div>;
  }

  return (
    <div className="destination-card mt-8 h-[590px] mb-2 relative rounded-lg  mx-auto">
      <Image src={destination.thumbnail} alt={destination.title} width={300} height={200} className=''/>
      <h1 className='font-bold my-4 text-[20px] text-left'>{destination.title}</h1>
      <p className='text-left text-[13px]'>{destination.description}</p>
      <h3 className='text-[13px] font-medium text-left my-3'>Warranty Information: {destination.warrantyInformation}</h3>
      <span className='absolute top-3 right-2 bg-[#8e8e8e] text-white flex items-center py-1 px-2 border-[1px] border-[lightgray] rounded-full text-[12px]'>
        <span className='text-[#FFCD6B] mr-1'><FaStar /></span> {destination.rating}
      </span>
      <div className='flex justify-between items-center gap-2 mt-4'>
        <span>Price: <span className='text-red-600 font-medium'>{destination.price}</span></span>
        <button className='text-white px-4 py-2 rounded-full text-[15px]  seemorebg'>See More</button>
      </div>
    </div>
  );
};

DestinationAPI.propTypes = {
  destination: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    warrantyInformation: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationAPI;
