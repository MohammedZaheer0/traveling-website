import Image from 'next/image';

import React from 'react'

const Travel = ({presonImg,earthImg,vectorLine,MdCellTower,FaLocationDot}) => {
  return (
    <div>
      <div className="earthbackground -z-50">
                  <div className="bgimage  top-[-18%] relative z-10">
                    <Image
                    src={presonImg}
                    alt="presonImg"
                    className="z-40"
                    priority
                    />
                    <Image
                    src={earthImg}
                    alt="earthImg"
                    className="absolute top-[20%]  -z-10 earthimage w-full h-auto"
                    priority
                    />
                    <Image
                    src={vectorLine}
                    alt="vectorLine"
                    className="absolute top-[25%] md:-left-16 -left-2  -z-10"
                    priority
                    />

                    <button className="bg-white md:p-4 py-2 shadow-2xl rounded-md flex items-center absolute top-[40%] xl:-right-[20%] md:-right-[30%] -right-[0%]">
                    <MdCellTower className="text-[#FACD49] md:text-xl md:mr-2"/>
                    <div className="">
                      <p className="text-[#5D50C6] text-[10px] md:text-[15px] font-bold">5000+</p>
                      <p className="text-[#5B5F62] md:text-[12px] text-[10px]">Customers</p>
                    </div>
                    </button>
                    
                    <button className="bg-white md:p-4 p-2 shadow-2xl rounded-full flex items-center absolute top-[70%] md:-left-[16%] -left-[5%]">
                    <FaLocationDot className="text-[#FACD49] md:text-xl md:mr-2 mr-1"/>
                    <div className="">
                      <p className="md:text-[12px] text-[10px] text-[#393E46] font-bold">Top Places</p>
                    </div>
                    </button>

                    <button className="bg-white md:p-4 p-2 shadow-2xl rounded-full flex items-center absolute top-[80%] md:-right-[10%] -right-[0%]">
                    <FaLocationDot className="text-[#FACD49] md:text-xl md:mr-2 mr-1"/>
                    <div className="">
                      <p className="md:text-[12px] text-[10px] text-[#393E46] font-bold">Top Hotels</p>
                    </div>
                    </button>

                  </div>
            </div>
    </div>
  )
}

export default Travel
