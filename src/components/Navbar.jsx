/** @format */

import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className='w-full sticky bg-gradient-to-r from-blue-900 to-black shadow'>
        <div className='justify-between text-gray-100 px-4 mx-auto lg:max-w-full md:items-center md:flex'>
          <div className='flex items-center justify-between  md:block'>
            <a href='/'>
              <img src={Logo} alt='Logo' className='w-[15%] md:w-[20%] ' />
            </a>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns=''
                    className='w-6 h-6 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns=''
                    className='w-6 h-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}>
              <ul className='text-gray-100 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li>
                  <Link
                    to='/about'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='inline-block w-full px-4 py-2 text-center text-white rounded-md hover:bg-gray-200 duration-500
                                    hover:text-blue-900'>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className='inline-block w-full px-4 py-2 text-center text-white rounded-md hover:bg-gray-200 duration-500
                                    hover:text-blue-900'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
