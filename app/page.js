'use client';
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
import Feliz from '@/public/assets/feliz-mulher-africana-sentada-com-mala-isolada-em-fundo-amarelo(1)-transformed 1.png';
// import Link from "next/link";
import Homem from '../public/assets/homem-de-ferias-com-uma-grande-mala-amarela-se-sentindo-feliz-no-azul-transformed 1.png';
// import Destinations from "./destination/page";
import Destinations from './destination/page';
import FilterData from './filterdata/page';

import React,{useEffect, useRef, useState} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger) ;
gsap.registerPlugin(TextPlugin);

import TourImg from '@/public/assets/Rectangle 1446.png';
import LocationImg from '@/public/assets/Group.png';
import Thumb from '@/public/assets/thumb.png';
import Heart from '@/public/assets/heart.png';
import Letter from '@/public/assets/letter.png';
import MessageIcon from '@/public/assets/MessageIcon.png';
import RightVictor from '@/public/assets/rightVector.png';
import LeftVictor from '@/public/assets/leftVector.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    // console.log('Category clicked:', category);
    setSelectedCategory(category);
  };

  const homeleftdivh1 = useRef(null);

  
  useEffect(() => {
    const tl = gsap.timeline();


    tl.fromTo(
      ".upper-bestforyou",
      { x: -200, opacity: 0 }, // Start from the left side
      {
        x: 0,
        opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: ".upper-bestforyou",
          start: "top center",
          scrub: 1,
        },
      }
    );


    tl.fromTo(
      ".bottom-bestforyou",
      { x: 200, opacity: 0 }, // Start from the right side
      {
        x: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".bottom-bestforyou",
          start: "top center",
          scrub: 1,
        },
      }
    );



    // Home
    tl.to("#heading1",{
      duration:2,
      delay:2,
      color:"#F85E9F",
      text:"best <br> spot of",
      ease: "power2.out"
    })

    
    gsap.from(".homeleftdiv button",{
      x: -400,
      opacity: 0,
      duration: 0.3,
      stagger: 0.3,
      clearProps:"all"
    })

    gsap.from(homeleftdivh1.current,{
      x: -300,
      opacity: 0,
      duration: 0.7,
      stagger: 0.3,
      clearProps:"all"
    })

    gsap.from(".homeleftdiv  p",{
      x: -200,
      opacity: 0,
      duration: 0.9,
      stagger: 0.3,
      clearProps:"all"
    })

    gsap.from(".homerightdiv",{
      x: 500,
      opacity: 0,
      duration: 0.5,
      clearProps:"all"
    })



    tl.to("#signup",{
      duration:3,
      delay:1,
      repeat:-1,
      text:"To Our Newsletter"
    })
  },[])
 
  return (
    <div className="parent">

    {/* Home Div */}
    <div id="home" className="xl:mt-[12%] mt-[25%] sm:mt-[15%] lg:mt-[15%] mb-5">
        <div className="homeparentdiv grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
        
        
          <div className="homeleftdiv mb-16 lg:mb-1">
              <button className="flex items-center border-[1px] border-[lightgray] text-[#F85E9F] shadow-sm py-3 px-5 rounded-full mb-5"><p>Explore the world!</p> <IoBagHandle className=" ml-2"/></button>
              <h1 ref={homeleftdivh1} className="xl:text-6xl lg:text-5xl text-4xl font-medium my-5">Travel <span id="heading1" className="text-[#F85E9F]">top <br /> destination</span>  <br />
               the world</h1>

              <p className="text-[14px] my-3 textcolor md:w-[70%]">Where adventure meets comfort. We create unforgettable travel experiences</p>
            <div className="flex my-6 md:w-[80%]">
            <button className='text-[13px] font-medium bg-[#5D50C6] hover:bg-[#8179c0] shadow-xl text-white py-3 px-8 rounded-full mr-4'>Get Started</button>
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





          <div className="homerightdiv w-[100%] mx-auto mt-[30px] sm:mt-[40px] lg:mt-[30px]">
            <Travel 
            presonImg={Menina} 
            earthImg={Layer} 
            vectorLine={Vector1} 
            MdCellTower={MdCellTower} 
            FaLocationDot={FaLocationDot} 
            lastTest='Top Hotels'
            presonImgSize={{ width: 450, height: 450 }}
            />
          </div>


        </div>
        
        <div className="my-10 md:w-[90%] w-[100%] mx-auto cursor-pointer">
          <Image
          src={Frame80}
          alt="Frame80"
          priority
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
          priority
          />
          <h2 className="my-5 font-semibold text-[#252B42] md:text-2xl text-[17px]">Lot of choices</h2>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>
        
        <div>
          <Image
          src={YellowPaper}
          alt="YelloPaper"
          priority
          />
          <h2 className="my-5 font-semibold text-[#252B42] md:text-2xl text-[17px]">Best Tour Guide</h2>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>

        <div>
          <Image
          src={Card}
          alt="Card"
          priority
          />
          <h2 className="my-5 font-semibold text-[#252B42] md:text-2xl text-[17px]">Easy Booking</h2>
          <p className="text-[15px] textcolor">Embrace life&apos;s vastness, <br /> venture forth,</p>
        </div>
      </div>
    </div>


    {/* choose your next destination */}
    <div>
    <Destinations/>
    </div>

    

    {/* We Are The Best For  You */}

    <div className="xl:mt-[150px] mt-[100px]  mb-10 w-[90%] mx-auto">
      <div className="grid md:grid-cols-[60%_40%] grid-cols-1 justify-between items-center">

    <div className="upper-bestforyou earthbackgroundyellow -z-50 relative  md:mb-2">
                  <div className="bglinearcircle lg:h-16 h-10 lg:w-16 w-10 rounded-full absolute bottom-0 lg:left-6 md:left-1 left-5"></div>
                  <div className=" top-[-16%] overflow-hidden md:left-[25%] left-[20%] relative z-10 w-[90%]">
                    <Image
                    src={Feliz}
                    alt="Feliz"
                    className="z-40 w-[175px] lg:w-[232px] "
                    priority
                    />
                    <div className="bglinearcircle lg:h-16 h-10 lg:w-16 w-10 rounded-full absolute top-2 right-14"></div>
                    <div className="bg-[#FF5722] lg:h-10 h-6 lg:w-10 w-6 rounded-full  absolute bottom-20 blur-sm lg:right-4 right-2"></div>
                    <div className="bg-[#FF5722] md:h-6  md:w-6 hidden lg:block rounded-full absolute top-40 blur-sm right-12"></div>
                    <div className="bg-[#FACD49] lg:h-8 h-4 lg:w-8 w-4  rounded-full absolute top-24 lg:right-0 right-4"></div>

                  </div>
      </div>


    <div className="bottom-bestforyou lg:w-[60%] mt-12 md:mt-0 ">
      <h2 className="text-[#F85E9F] text-[15px] font-semibold my-2">WE ARE THE BEST FOR YOU</h2>
      <h1 className="font-semibold text-[30px] my-2">Unlock Your Dream Destination</h1>
      <small className="textcolor">We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</small>
      <div className="grid grid-cols-2 justify-between items-center my-6 gap-6">
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[25px] font-bold mb-2">4K+</h2>
          <small>Satisfied Customers</small>
        </div>
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[25px] font-bold mb-2">1000+</h2>
          <small>Global Destinations</small>
        </div>
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[25px] font-bold mb-2">24/7</h2>
          <small>Customer Support</small>
        </div>
        <div className="border-[1px] border-[lightgray] text-center rounded-2xl p-2">
          <h2 className="text-[#F85E9F] text-[25px] font-bold mb-2">100%</h2>
          <small>Dedication</small>
        </div>
      </div>
      </div> 

    </div>
    </div>




    {/* Top Destinations */}
      <div id="destinations" className="my-10 md:w-[90%] mx-auto">
        <h2 className="text-[#F85E9F] text-[15px] font-semibold px-4 md:px-0">TOP DESTINATION</h2>
        <div className="grid lg:grid-cols-2 mx-auto px-4 md:px-0 grid-cols-1 justify-between my-4 items-center">
          <h1 className="text-[30px] font-semibold">Explore top destination</h1>
          <div className="grid md:grid-cols-5 grid-cols-3 place-items-start md:justify-between text-[15px] font-medium my-3 md:my-0 md:mt-4 lg:mt-0">
              <button onClick={() => handleCategoryClick('beauty')}>Beauty</button>
              <button onClick={() => handleCategoryClick('fragrances')} className="textcolor" >Fragrances</button>
              <button onClick={() => handleCategoryClick('furniture')} className="textcolor" >Furniture</button>
              <button onClick={() => handleCategoryClick('groceries')} className="textcolor my-2 md:my-0" >Groceries</button>
              <button onClick={() => handleCategoryClick('all')} className="text-[#F85E9F] underline my-2 md:my-0">See all</button>
          </div>    
        </div>
        <FilterData category={selectedCategory}/>
      </div>




      {/* Our Experience */}
      <div id="packages" className=" w-[90%] mx-auto grid md:grid-cols-[40%_60%] lg:grid-cols-2 items-center grid-cols-1 justify-between mt-[50px] md:mt-[150px] mb-14">
       
        <div className="">
        <h2 className="text-[#F85E9F] text-[15px] font-semibold  my-3">OUR EXPERIENCE</h2>
        <h1 className="text-[35px] font-semibold">Crafting  <br /> Unforgettable <br /> Adventures</h1>
        <p className="textcolor md:w-[80%] my-4">We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a wealth of experience, we bring adventures to life and invite you to  embark on your own. The call of nature awaits—begin  your adventure today!</p>
        
        <div className="my-4 grid grid-cols-3 items-center justify-around">
          <div className="">
            <h2 className="text-[#F85E9F] text-[25px] font-bold">1,000+</h2>
            <p className="text-[15px] textcolor">outdoor <br /> destinations</p>
          </div>
          <div>
            <h2 className="text-[#F85E9F] text-[25px] font-bold">98%</h2>
            <p className="text-[15px] textcolor">customer <br /> satisfaction</p>
          </div>
          <div>
            <h2 className="text-[#F85E9F] text-[25px] font-bold">15+</h2>
            <p className="text-[15px] textcolor">Years Of <br /> Experience</p>
          </div>
        </div>
        </div>



        <div className="earthbackground mx-auto -z-50 mt-[80px] md:mt-0">
                  <div className="bgimage top-[-18%] relative z-10">
                    <Image
                    src={Homem}
                    alt="Homem"
                    className="z-40 md:w-[390px] w-[260px]"
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
                      <p className="md:text-[12px] text-[10px] text-[#393E46] font-bold">Best Adventures</p>
                    </div>
                    </button>

                  </div>
            </div>

      </div>


      {/* Meet Our Expert Tour Guides */}
      <div id="blog" className="grid md:grid-cols-2 grid-cols-1 justify-between items-center w-[90%] mx-auto my-14">
        <div className="md:w-[80%]">
          <h1 className="text-[30px] font-bold my-2">Meet Our Expert Tour <br />Guides</h1>
          <p className="textcolor md:w-[90%]">Our journeys are enriched by our team of seasoned tour guides. Our guides bring your adventures to life with their expertise, passion</p>

          <div className="relative mt-14">

            <div className="absolute lg:left-10 left-5 md:top-5 top-3 w-fit">
              <button className="flex gap-2 items-center bg-[#add8e6e1] py-1 px-3 rounded-full text-[14px] text-white w-fit"><Image src={LocationImg} alt="loading" priority/> Gramado, Brazil</button>
            </div>

            <Image src={TourImg} alt="TourImg" priority/>

            <div className="bglinearcircle lg:h-16 h-8 lg:w-16 w-8 rounded-full absolute bottom-14 lg:left-0 md:left-1 left-5"></div>
            <div className="bg-[#FACD49] lg:h-8 h-4 lg:w-8 w-4 hidden xl:block rounded-full absolute bottom-24 lg:-right-2 right-4"></div>
            <div className="bglinearcircle lg:h-16 h-8 lg:w-16 w-8 rounded-full absolute -top-12 right-0"></div>
          </div>

        </div>


        <div className="">

          <div className="flex justify-between items-center lg:gap-10 gap-2 my-10">
            <Image src={Thumb} alt="Thumb" className="w-[50px] md:w-[80px]" priority/>
            <div className="w-[80%] mx-auto">
              <h2 className="font-bold text-[20px] my-4">Expertise</h2>
              <p className="textcolor">Our guides are experts in their fields, ensuring in-depth knowledge and insights into every destination.</p>
            </div>
          </div>
         
          <div className="flex justify-between items-center lg:gap-10 gap-2 my-10">
            <Image src={Heart} alt="Heart" className="w-[50px] md:w-[80px]" priority/>
            <div className="w-[80%] mx-auto">
              <h2 className="font-bold text-[20px] my-4">Passion</h2>
              <p className="textcolor">They are passionate about travel, culture, and history, making your journey engaging and captivating.</p>
            </div>
          </div>

          <div className="flex justify-between items-center lg:gap-10 gap-2 my-10">
            <Image src={Letter} alt="Letter" className="w-[50px] md:w-[80px]" priority/>
            <div className="w-[80%] mx-auto">
              <h2 className="font-bold text-[20px] my-4">Dedication</h2>
              <p className="textcolor">Our guides are dedicated to providing exceptional service and ensuring your travel memories are truly unforgettable.</p>
            </div>
          </div>
        </div>
      </div>



      {/* Sign Up to our newsletter */}
      <div className="md:w-[90%] w-[90%] px-4 md:px-0 mx-auto bg-[#FACD49] lg:my-24 my-10 flex flex-col md:justify-center md:items-center relative md:py-16 py-10 rounded-3xl overflow-hidden">
        <h1 className="font-bold text-[25px]">Sign Up <span id="signup"></span></h1>
        <p className="textcolor md:w-[50%] my-2 mx-auto md:text-center">Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>
        <div className="lg:flex absolute justify-between hidden items-center w-[95%] py-2 mx-auto">
        <Image src={LeftVictor} alt="LeftVictor" priority/>
        <Image src={RightVictor} alt="RightVictor" priority/>
        </div>
        <div className="my-4 flex gap-5 bg-white rounded-xl justify-around items-center md:px-4">
          <input type="text" placeholder="Enter Your email address" className="outline-none border-none "/>
          <Image src={MessageIcon} alt="MessageIcon" priority/>
        </div>
      </div>


    {/* About Us */}
    <div id="contactus" className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center md:text-left my-16 w-[90%] mx-auto lg:gap-5 gap-2 ">

        <div className="my-4 md:my-0 text-[#6F6C90]">
        <h2 className="travlogtitle mb-4">Travlog</h2>
        <p className="textcolor text-[15px] my-2">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
        <div className="flex gap-5 items-center text-[#F95F9F] my-5 text-[20px] cursor-pointer justify-center md:justify-start">
        <FaFacebookF/>
        <FaTwitter/>
        <PiInstagramLogoFill/>
        <FaLinkedin/>
        <FaYoutube/>
        </div>
      </div>
      
      <div className="my-4 md:my-0 text-[#6F6C90]">
        <h2 className="text-[20px] font-bold text-[#170F49] mb-4">Product</h2>
        <p className="textcolor text-[15px] my-2">Features</p>
        <p className="textcolor text-[15px] my-2">Pricing</p>
        <p className="textcolor text-[15px] my-2">Case studies</p>
        <p className="textcolor text-[15px] my-2">Reviews</p>
        <p className="textcolor text-[15px] my-2">Updates</p>
      </div>

      <div className="my-4 md:my-0 text-[#6F6C90]">
        <h2 className="text-[20px] font-bold text-[#170F49] mb-4">Company</h2>
        <p className="textcolor text-[15px] my-2">About</p>
        <p className="textcolor text-[15px] my-2">Contact us</p>
        <p className="textcolor text-[15px] my-2">Careers</p>
        <p className="textcolor text-[15px] my-2">Culture</p>
        <p className="textcolor text-[15px] my-2">Blog</p>
      </div>


      <div className="my-4 md:my-0 text-[#6F6C90]">
        <h2 className="text-[20px] font-bold text-[#170F49] mb-4">Support</h2>
        <p className="textcolor text-[15px] my-2">Getting started</p>
        <p className="textcolor text-[15px] my-2">Help center</p>
        <p className="textcolor text-[15px] my-2">Server status</p>
        <p className="textcolor text-[15px] my-2">Report a bug</p>
        <p className="textcolor text-[15px] my-2">Chat support</p>
      </div>


      <div className="my-4 md:my-0 text-[#6F6C90]">
        <h2 className="text-[20px] font-bold text-[#170F49] mb-4">Contacts us</h2>
        <p className="textcolor text-[15px] my-2 flex gap-3 items-center justify-center md:justify-start"><RiMessage2Line/> contact@company.com</p>
        <p className="textcolor text-[15px] my-2 flex gap-3 items-center justify-center md:justify-start"><MdOutlineAddIcCall/> (xx) xxxx-xxxx</p>
        <p className="textcolor text-[15px] my-2 flex gap-3 items-center justify-center md:justify-start"><IoLocationOutline/> 794 Mcallister St <br /> San Francisco, 94102</p>
      </div>


      


   
    </div>



    {/* Footer */}
    <div className="grid md:flex text-center md:text-left grid-cols-1 justify-between items-center w-[90%] mx-auto my-5 border-t-2 pt-7 text-[#6F6C90]">
      <p>Copy &#64; 2023</p>
      <p>All Rights Reserved | <a href="#" className="text-[#4A3AFF] underline">Terms and Conditions</a> | <a href="#" className="text-[#4A3AFF] underline">Privacy Policy</a></p>
    </div>


    </div>
  );
}
