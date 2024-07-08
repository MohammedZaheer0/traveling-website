import Image from "next/image";
import Vector from '@/public/assets/Vector.png';
import { IoBagHandle } from "react-icons/io5";
import Frame80 from '@/public/assets/Frame-80.png';
import Travel from '@/app/Travel';
import Menina from '@/public/assets/menina-de-cabelos-escuros-com-oculos-e-chapeu-de-palha-detem-ingressos-e-mala-azul-retrato-de-viajante-em-um-lindo-vestido-retro-na-parede-lilas-transformed 1.png';
import Layer from '@/public/assets/layer.png';
import Vector1 from '@/public/assets/Vector1.png';
import { MdCellTower } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import TravelAnywhere from '@/public/assets/Travel anywhere in the world with a suitcase.png';
import Card from '@/public/assets/card.png';
import YellowPaper from '@/public/assets/yellow paper airplane.png';
import Feliz from '@/public/assets/feliz-mulher-africana-sentada-com-mala-isolada-em-fundo-amarelo(1)-transformed 1.png'


import Destinations from "./destination/page";


export default function Home() {
  return (
    <div className="parent">

    {/* Home Div */}
    <div id="home" className="xl:mt-[12%] mt-[25%] sm:mt-[15%] lg:mt-[15%] mb-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] mx-auto">
          <div className="mb-16 lg:mb-1">
              <button className="flex items-center border-[1px] border-[lightgray] text-[#F85E9F] shadow-sm py-3 px-5 rounded-full mb-5"><p>Explore the world!</p> <IoBagHandle className=" ml-2"/></button>
              <h1 className="xl:text-6xl lg:text-5xl text-4xl font-medium my-5">Travel <span className="text-[#F85E9F]">top <br /> destination</span>  <br />
              of the world</h1>

              <p className="text-[14px] my-3 textcolor lg:w-[90%]">Where adventure meets comfort. We create unforgettable travel experiences</p>
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

          <div className="w-[100%] mt-[30px] sm:mt-[40px] lg:mt-[30px]">
            <Travel presonImg={Menina} earthImg={Layer} vectorLine={Vector1} MdCellTower={MdCellTower} FaLocationDot={FaLocationDot}/>
          </div>
        </div>
        <div className="my-10 md:w-[90%] w-[100%] mx-auto cursor-pointer">
          <Image
          src={Frame80}
          alt="Frame80"
          />
        </div>
    </div>







    {/* What We Serve */}
    <div id="about" className="w-[90%] mx-auto mt-20 mb-24">
      <h1 className="text-[#F85E9F] font-semibold text-[15px] mt-4 mb-5 sm:mb-0">WHAT WE SERVE</h1>
      
      <div className="grid lg:grid-cols-4 grid-cols-2 justify-between items-center gap-10">

        <div>
          <h1 className="font-bold md:text-4xl text-3xl text-[#252B42] mb-5">Top Values <br /> 
          For You</h1>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>

        <div>
          <Image
          src={TravelAnywhere}
          alt="TravelAnywhere"
          />
          <h2 className="my-5 font-semibold text-[#252B42] md:text-2xl text-[17px]">Lot of choices</h2>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>
        
        <div>
          <Image
          src={YellowPaper}
          alt="YelloPaper"
          />
          <h2 className="my-5 font-semibold text-[#252B42] md:text-2xl text-[17px]">Best Tour Guide</h2>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>

        <div>
          <Image
          src={Card}
          alt="Card"
          />
          <h2 className="my-5 font-semibold text-[#252B42] md:text-2xl text-[17px]">Easy Booking</h2>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>
      </div>
    </div>


    <div className="md:w-[90%] w-[95%] mx-auto my-5">
      <h3 className="text-[#F85E9F]  font-semibold text-[15px]">CHOOSE YOUR NEXT DESTINATION</h3>
      <h2 className="font-semibold text-[30px] mt-2">Explore top destination</h2>
      <Destinations/>
    </div>


    <div className="xl:mt-[150px] mt-[100px]  mb-10 w-[90%] mx-auto">
      <div className="grid md:grid-cols-[60%_40%] grid-cols-1 justify-between items-center">

    <div className="earthbackgroundyellow -z-50 relative  md:mb-2">
                  <div className="bglinearcircle lg:h-16 h-10 lg:w-16 w-10 rounded-full absolute bottom-0 lg:left-6 md:left-1 left-5"></div>
                  <div className=" top-[-16%] overflow-hidden md:left-[25%] left-[20%] relative z-10 w-[90%]">
                    <Image
                    src={Feliz}
                    alt="Feliz"
                    className="z-40 w-[175px] lg:w-[232px] "
                      // width={232}
                      // height={232}
                    priority
                    />
                    <div className="bglinearcircle lg:h-16 h-10 lg:w-16 w-10 rounded-full absolute top-2 right-14"></div>
                    <div className="bg-[#FF5722] lg:h-10 h-6 lg:w-10 w-6 rounded-full  absolute bottom-20 blur-sm lg:right-4 right-2"></div>
                    <div className="bg-[#FF5722] md:h-6  md:w-6 hidden lg:block rounded-full absolute top-40 blur-sm right-12"></div>
                    <div className="bg-[#FACD49] lg:h-8 h-4 lg:w-8 w-4  rounded-full absolute top-24 lg:right-0 right-4"></div>

                  </div>
      </div>


    <div className="lg:w-[60%] mt-12 md:mt-0 ">
      <h2 className="text-[#F85E9F] text-[15px] font-semibold my-2">WE ARE THE BEST FOR YOU</h2>
      <h1 className="font-semibold text-[30px] my-2">Unlock Your Dream Destination</h1>
      <small className="textcolor">We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</small>
      <div className="grid grid-cols-2 justify-between items-center my-6 gap-6">
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[20px] font-bold mb-2">4K+</h2>
          <small>Satisfied Customers</small>
        </div>
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[20px] font-bold mb-2">1000+</h2>
          <small>Global Destinations</small>
        </div>
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[20px] font-bold mb-2">24/7</h2>
          <small>Customer Support</small>
        </div>
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[20px] font-bold mb-2">100%</h2>
          <small>Dedication</small>
        </div>
      </div>
      </div>        
    </div>
    </div>


    </div>
  );
}
