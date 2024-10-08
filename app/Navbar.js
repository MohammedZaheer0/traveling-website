'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isClick, setIsClick] = useState(true);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  }

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#navtitle, .navul li, .navbutton button", {
      y: -75,
      duration: 0.5,
      stagger: 0.3,
      clearProps: "all"
    });
  }, []); 

  return (
    <div className=''>
      <div className='lg:w-[95%] w-[100%] xl:w-[90%] mx-auto lg:grid-cols-[15%_55%_20%] xl:grid-cols-[15%_45%_20%] justify-between items-center p-4 grid fixed top-0 left-0 right-0 mb-7 bg-white z-[999]'>
       
        <div className='inline lg:pl-[0px] pl-[15px] sm:pl-[20px]'>
          <h2 id='navtitle' className='travlogtitle cursor-pointer' onClick={() => { router.push('/') }}>Travlog</h2>
        </div>

        <ul className='navul justify-between text-[#7f8185] font-medium hidden lg:flex cursor-pointer'>
          <li className={pathname === '/' ? 'active' : ''} onClick={() => {router.push('/')}}>Home</li>
          <li className={pathname === '/#about' ? 'active' : ''} onClick={() => {router.push('/#about')}}>About</li>
          <li className={pathname === '/#destinations' ? 'active' : ''} onClick={() => {router.push('/#destinations')}}>Destinations</li>
          <li className={pathname === '/#packages' ? 'active' : ''} onClick={() => {router.push('/#packages')}}>Packages</li>
          <li className={pathname === '/#blog' ? 'active' : ''} onClick={() => {router.push('/#blog')}}>Blog</li>
          <li className={pathname === '/#contactus' ? 'active' : ''} onClick={() => {router.push('/#contactus')}}>Contact Us</li>
        </ul>

        <div className='navbutton items-center font-medium text-[15px] hidden lg:flex'>
          <button onClick={() => { router.push('/login') }} className='xl:mx-10 mr-5'>Login</button>
          <button onClick={() => { router.push('/signup') }} className='bg-[#5D50C6] shadow-xl text-white py-3 px-8 rounded-full'>Sign Up</button>
        </div>
      </div>

      <div className='lg:hidden flex items-center fixed lg:absolute top-3 right-2 z-[99999]'>
        <button className='inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset' onClick={toggleNavbar}>
          {isClick ? (<IoMenu className='text-3xl' />) : (<RxCross2 className='text-3xl font-bold' />)}
        </button>
      </div>

      {!isClick && (
        <div className='w-[100%] bg-white overflow-x-hidden'>
          <div className='lg:hidden fixed top-0 left-0 right-0 px-4 pt-[50px] pb-3 space-y-1 sm:px-3 bg-white mt-5 transition-all w-full h-full z-[9999]'>
            <ul className='flex flex-col justify-center items-center mb-9 text-[#7f8185] gap-4 font-medium'>

              <Link href='/' className='p-2 rounded-lg' onClick={toggleNavbar}><li className={pathname === '/' ? 'active' : ''}>Home</li></Link>
              <Link href='/#about' className='p-2 rounded-lg' onClick={toggleNavbar}><li className={pathname === '/#about' ? 'active' : ''}>About</li></Link>
              <Link href='/#destinations' className='p-2 rounded-lg' onClick={toggleNavbar}><li className={pathname === '/#destinations' ? 'active' : ''}>Destinations</li></Link>
              <Link href='/#packages' className='p-2 rounded-lg' onClick={toggleNavbar}><li className={pathname === '/#packages' ? 'active' : ''}>Packages</li></Link>
              <Link href='/#blog' className='p-2 rounded-lg' onClick={toggleNavbar}><li className={pathname === '/#blog' ? 'active' : ''}>Blog</li></Link>
              <Link href='/#contactus' className='p-2 rounded-lg' onClick={toggleNavbar}><li className={pathname === '/#contactus' ? 'active' : ''}>Contact Us</li></Link>
           
            </ul>

            <div className='items-center font-medium text-[15px] justify-center flex'>
              <button onClick={() => { router.push('/login') }} className='mx-10'>Login</button>
              <button onClick={() => { router.push('/signup') }} className='bg-[#5D50C6] text-white py-3 px-8 rounded-full hover:bg-[#a59edd]'>Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
