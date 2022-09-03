import React from 'react';
import { useMemo } from 'react';
import { HiChevronRight, HiUser } from 'react-icons/hi';

const ActivityCard = ({ title, time, link }) => {
  return (
    <button className='p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-50'>
      <div className='flex gap-x-2 items-center'>
        <div className='rounded-full p-2 bg-blue-200 text-blue-500'>
          <HiUser className='text-4xl' />
        </div>
        <div className='flex flex-col gap-y-px leading-4'>
          <h3 className='font-bold text-gray-600'>HTML/CSS</h3>
          <h3 className='font-semibold text-sm text-gray-400'>30mins ago</h3>
        </div>
      </div>
      <HiChevronRight className='text-2xl text-gray-400' />
    </button>
  );
};

export default ActivityCard;
