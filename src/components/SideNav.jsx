import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import LogoIcon from '../assets/images/about.png';

import { MdOutlineDashboard, MdClass, MdLogout } from 'react-icons/md';

import { FaCalendarAlt, FaUser, FaUsers, FaUserTie } from 'react-icons/fa';
import { useAuth } from '../context/authContext';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const adminLinks = [
  {
    to: 'admin/dashboard',
    label: 'Dashboard',
    icon: MdOutlineDashboard,
  },
  {
    to: 'admin/classrooms',
    label: 'Classrooms',
    icon: MdClass,
  },
  {
    to: 'admin/teachers',
    label: 'Teachers',
    icon: FaUserTie,
  },
  {
    to: 'admin/students',
    label: 'Students',
    icon: FaUsers,
  },
];

const studentLinks = [
  {
    to: 'student/profile',
    label: 'Profile',
    icon: FaUser,
  },
  {
    to: 'student/attendance',
    label: 'View Attendance',
    icon: FaCalendarAlt,
  },
];

const teacherLinks = [
  {
    to: 'teacher/dashboard',
    label: 'Dashboard',
    icon: MdOutlineDashboard,
  },
  {
    to: 'teacher/students',
    label: 'Students',
    icon: FaUsers,
  },
];

const SideNav = () => {
  const auth = useAuth();

  const location = useLocation();

  const isAdmin = useMemo(() => auth?.userRole === 'admin', [auth?.userRole]);
  const isStudent = useMemo(
    () => auth?.userRole === 'student',
    [auth?.userRole]
  );
  const isTeacher = useMemo(
    () => auth?.userRole === 'teacher',
    [auth?.userRole]
  );

  const links = useMemo(() => {
    if (isAdmin) return adminLinks;
    if (isStudent) return studentLinks;
    if (isTeacher) return teacherLinks;
  }, [isAdmin, isStudent, isTeacher]);

  const handleLogout = useCallback(() => {
    auth.signOut();
  }, [auth]);

  return (
    <div>
      <Disclosure as='nav' className='md:mr-64'>
        <Disclosure.Button className='static top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-blue-900 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-CoolGray100 hover:bg-blue-900 group'>
          <GiHamburgerMenu
            className='block h-6 w-6 md:hidden'
            aria-hidden='true'
          />
        </Disclosure.Button>
        <div className='p-6 w-1/2 h-screen bg-gray-100 z-10 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
          <div className='mb-8 flex felx-col justify-center items-center'>
            <img src={LogoIcon} alt='logo' width='130' />
          </div>
          <div className='my-4 border-b pb-12'>
            {links.map((link, index) => (
              <Link to={link.to} key={index}>
                <div
                  className={`flex mb-2 justify-start items-center gap-4 pl-5 text-blue-900 hover:bg-blue-900 hover:text-white p-2 rounded-md cursor-pointer hover:shadow-lg m-auto ${
                    location.pathname.includes(link.to) &&
                    'bg-blue-900 !text-white'
                  }`}>
                  <link.icon className='text-2xl' />
                  <h3 className='text-base font-semibold'>{link.label}</h3>
                </div>
              </Link>
            ))}
          </div>
          <button className='w-full' onClick={handleLogout}>
            <div className='flex mb-2 justify-center items-center gap-2 px-5 border border-blue-900 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <MdLogout className='text-2xl text-blue-900 group-hover:text-gray-200' />
              <h3 className='text-base text-blue-900 group-hover:text-gray-200 font-semibold'>
                Log out
              </h3>
            </div>
          </button>
        </div>
      </Disclosure>
    </div>
  );
};

export default SideNav;
