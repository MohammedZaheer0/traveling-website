import Image from "next/image";
import Vector from '@/public/assets/Vector.png';
import { IoBagHandle } from "react-icons/io5";
import Menina from '@/public/assets/menina-de-cabelos-escuros-com-oculos-e-chapeu-de-palha-detem-ingressos-e-mala-azul-retrato-de-viajante-em-um-lindo-vestido-retro-na-parede-lilas-transformed 1.png';
import Layer from '@/public/assets/layer.png';
import Vector1 from '@/public/assets/Vector1.png';
import { MdCellTower } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Frame80 from '@/public/assets/Frame-80.png'

export default function Home() {
  return (
    <div className="parent">

    {/* Home Div */}
    <div id="home" className="xl:mt-[12%] mt-[25%] sm:mt-[15%] lg:mt-[19%] mb-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] mx-auto">
          <div className="mb-16 lg:mb-1">
              <button className="flex items-center border-[1px] border-[lightgray] text-[#F85E9F] shadow-sm py-3 px-5 rounded-full mb-5"><p>Explore the world!</p> <IoBagHandle className=" ml-2"/></button>
              <h1 className="lg:text-6xl text-4xl font-medium my-5">Travel <span className="text-[#F85E9F]">top <br /> destination</span>  <br />
              of the world</h1>

              <p className="text-[14px] my-3 textcolor">Where adventure meets comfort. We create unforgettable travel experiences</p>
            <div className="flex my-6">
            <button className='text-[13px] font-medium bg-[#5D50C6] shadow-xl text-white py-3 px-8 rounded-full mr-4'>Get Started</button>
            <button className='border-[1px] border-[lightgray] py-3 px-8 rounded-full flex items-center'>
              <Image
              src={Vector}
              alt="Vector"
              width={17}
              height={17}
              priority
              />
              <p className="ml-2 text-[13px] font-medium">Watch Demo</p>
              </button>
            </div>
          </div>

          <div className="w-[100%] mt-[30px] sm:mt-[40px]">
            <div className="earthbackground -z-50">
                  <div className="bgimage  top-[-18%] relative z-10">
                    <Image
                    src={Menina}
                    alt="Menina"
                    className="z-40"
                    priority
                    />
                    <Image
                    src={Layer}
                    alt="Layer"
                    className="absolute top-[20%]  -z-10 earthimage w-full h-auto"
                    priority
                    />
                    <Image
                    src={Vector1}
                    alt="Vector1"
                    className="absolute top-[25%] md:-left-16 -left-6  -z-10"
                    priority
                    />

                    <button className="bg-white md:p-4 py-2 shadow-2xl rounded-md flex items-center absolute top-[40%] md:-right-[20%] -right-[8%]">
                    <MdCellTower className="text-[#FACD49] md:text-xl md:mr-2"/>
                    <div className="">
                      <p className="text-[#5D50C6] text-[10px] md:text-[15px] font-bold">5000+</p>
                      <p className="text-[#5B5F62] md:text-[12px] text-[10px]">Customers</p>
                    </div>
                    </button>
                    
                    <button className="bg-white md:p-4 p-2 shadow-2xl rounded-full flex items-center absolute top-[70%] md:-left-[16%] -left-[10%]">
                    <FaLocationDot className="text-[#FACD49] md:text-xl md:mr-2 mr-1"/>
                    <div className="">
                      <p className="md:text-[12px] text-[10px] text-[#393E46] font-bold">Top Places</p>
                    </div>
                    </button>

                    <button className="bg-white md:p-4 p-2 shadow-2xl rounded-full flex items-center absolute top-[80%] md:-right-[10%] -right-[8%]">
                    <FaLocationDot className="text-[#FACD49] md:text-xl md:mr-2 mr-1"/>
                    <div className="">
                      <p className="md:text-[12px] text-[10px] text-[#393E46] font-bold">Top Hotels</p>
                    </div>
                    </button>

                  </div>
            </div>
          </div>
        </div>
        <div className="my-10 md:w-[90%] w-[100%] mx-auto cursor-pointer">
          <Image
          src={Frame80}
          alt="Frame80"
          />
        </div>
    </div>






    <div id="about">
    
    </div>

    </div>
  );
}
