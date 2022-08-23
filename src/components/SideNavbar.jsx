import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import LogoIcon from '../img/logo.png';
import {
    MdOutlineDashboard,
    MdAccountBox, 
    MdOutlineAssignment,
    MdOutlineTableView,
    MdOutlineSettings, 
    MdLogout
    } from 'react-icons/md';

const SideNavbar = () => {
    return (
        <div>
        <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-PrimaryLightblue900 hover:text-CoolGray100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-CoolGray100 hover:bg-PrimaryLightblue900 group">
                <GiHamburgerMenu 
                  className="block md:hidden h-6 w-6" 
                  aria-hidden="true" 
                  />
            </Disclosure.Button>
        <div className='p-6 w-1/2 h-screen bg-CoolGray100 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
            <div className='mb-8 flex felx-col justify-center items-center'>
              <img src={LogoIcon} alt="logo" width="130" />
            </div>
            <div className='my-4 border-b pb-12'>

              <Link to="/">
              <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-PrimaryLightblue900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                {/* Icon */}
                <MdOutlineDashboard className='text-2xl text-PrimaryLightblue900 group-hover:text-CoolGray200' />
                <h3 className='text-base text-PrimaryLightblue900 group-hover:text-CoolGray200 font-semibold'>Dashboard</h3>
              </div></Link>

              <Link to="/profile">
              <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-PrimaryLightblue900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                {/* Icon */}
                <MdAccountBox className='text-2xl text-PrimaryLightblue900 group-hover:text-CoolGray200' />
                <h3 className='text-base text-PrimaryLightblue900 group-hover:text-CoolGray200 font-semibold'>Profile</h3>
              </div></Link>

              <Link to="/assignment">
              <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-PrimaryLightblue900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                {/* Icon */}
                <MdOutlineAssignment className='text-2xl text-PrimaryLightblue900 group-hover:text-CoolGray200' />
                <h3 className='text-base text-PrimaryLightblue900 group-hover:text-CoolGray200 font-semibold'>Assignment</h3>
              </div></Link>

              <Link to="/attendance">
              <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-PrimaryLightblue900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                {/* Icon */}
                <MdOutlineTableView className='text-2xl text-PrimaryLightblue900 group-hover:text-CoolGray200' />
                <h3 className='text-base text-PrimaryLightblue900 group-hover:text-CoolGray200 font-semibold'>View Attendance</h3>
              </div></Link>

            </div>

            {/* Settings */}
            <div className='my-8'>
              <div className='flex mb-4 justify-start items-center gap-4 pl-5 hover:bg-PrimaryLightblue900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                {/* Icon */}
                <MdOutlineSettings className='text-2xl text-PrimaryLightblue900 group-hover:text-CoolGray200' />
                <h3 className='text-base text-PrimaryLightblue900 group-hover:text-CoolGray200 font-semibold'>Settings</h3>
              </div>
            </div>

            {/* Log out */}
            <div className='my-8'>
              <div className='flex mb-2 justify-center items-center gap-2 px-5 border border-PrimaryLightblue900 hover:bg-PrimaryLightblue900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                {/* Icon */}
                <MdLogout className='text-2xl text-PrimaryLightblue900 group-hover:text-CoolGray200' />
                <h3 className='text-base text-PrimaryLightblue900 group-hover:text-CoolGray200 font-semibold'>Log out</h3>
              </div>
            </div>

        </div>
        </Disclosure>
        </div>
    )
}

export default SideNavbar