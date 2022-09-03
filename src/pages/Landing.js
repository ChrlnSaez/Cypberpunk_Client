import React from 'react';
import LoginForm from '../containers/Landing/Login';
import Logo from '../assets/images/CYBERPUNK.png';
import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';

const Landing = () => {
  const auth = useAuth();

  if (auth?.token && auth.userRole === 'student')
    return <Navigate to='/student/profile' replace />;

  if (auth?.token && auth.userRole === 'teacher')
    return <Navigate to='/teacher/dashboard' replace />;

  if (auth?.token && auth.userRole === 'admin')
    return <Navigate to='/admin/dashboard' replace />;

  return (
    <div className='flex justify-between' id='home'>
      <div className='flex flex-col'>
        <img src={Logo} alt='Logo' className='hidden ml-24 w-full md:flex' />
      </div>
      <div className='mt-[20%] ml-0.5  md:mt-[4%] md:ml-[8%]'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Landing;
