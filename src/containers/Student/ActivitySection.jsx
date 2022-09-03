import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';

const ActivitySection = () => {
  return (
    <div className='p-8 rounded-lg shadow-lg'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl text-gray-600 font-bold'>Assignments</h3>
        <Link
          to='/student/assignment'
          className='font-semibold text-blue-500 hover:text-blue-600'>
          See All
        </Link>
      </div>
      <div className='flex flex-col gap-y-2'>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default ActivitySection;
