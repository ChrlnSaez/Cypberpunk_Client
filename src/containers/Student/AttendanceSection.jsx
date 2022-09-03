import React from 'react';
import { Link } from 'react-router-dom';
import AttendanceCard from './AttendanceCard';

const AttendanceSection = ({ attendances }) => {
  return (
    <div className='p-8 rounded-lg shadow-lg'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl text-gray-600 font-bold'>Attendance</h3>
        <Link
          to='/student/attendance'
          className='font-semibold text-blue-500 hover:text-blue-600'>
          See All
        </Link>
      </div>
      <div className='flex flex-col gap-y-2'>
        {attendances?.slice(0, 5)?.map((a) => (
          <AttendanceCard
            status={a.status}
            date={new Date(a.createdAt).toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default AttendanceSection;
