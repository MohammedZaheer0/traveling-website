'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const LoginSignUpComponent = ({ 
  name, 
  button, 
  footer, 
  page, 
  rememberMe 
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleRedirect = () => {
    if (pathName === '/login') {
      router.push('/signup');
    } else {
      router.push('/login');
    }
  };

  return (
    <div>
      <div className='lg:w-[40%] w-[90%] md:w-[60%] mx-auto lg:py-14 py-4 h-[80vh]'>


        <div className='bg-[#1E1E1E] text-[#FFFFFF] flex flex-col justify-center items-center py-10 mt-20 lg:py-0'>
          <div className='w-[70%] lg:py-10'>
            <h1 className='text-3xl my-4'>{name}</h1>

            <form action="" onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
              {pathName !== '/login' && (
                <input
                  type="text"
                  className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent'
                  placeholder='Your Name'
                />
              )}

              <input
                type="email"
                className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent'
                placeholder='Email'
              />

              {pathName === '/login' && (
                <div className='flex items-center my-3'>
                  <input type="checkbox" id="rememberMe" className='mr-2' />
                  <label htmlFor="rememberMe">{rememberMe}</label>
                </div>
              )}

              <input
                type="password"
                className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent'
                placeholder='Password'
              />

              <button
                type='submit'
                className='bg-[#fff] cursor-pointer text-[#000] py-2 my-3 md:px-14 px-8 rounded-sm'
              >
                {button}
              </button>

              <p className='text-center text-[13px]'>
                {footer}{' '}
                <button
                  type='button'
                  className='text-[#FB7902] my-3 underline'
                  onClick={handleRedirect}
                >
                  {page}
                </button>
              </p>
            </form>
          </div>
        </div>



      </div>
    </div>
  );
}

export default LoginSignUpComponent;
