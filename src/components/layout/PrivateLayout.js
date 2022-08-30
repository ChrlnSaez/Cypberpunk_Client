import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SideNav from '../SideNav';

const PrivateLayout = ({ isAllowed, redirectTo = '/', children }) => {
  if (!isAllowed) return <Navigate to={redirectTo} replace />;

  return (
    <div className='w-full'>
      <SideNav />
      <main className='ml-64'>{children ? children : <Outlet />}</main>
    </div>
  );
};

export default PrivateLayout;
