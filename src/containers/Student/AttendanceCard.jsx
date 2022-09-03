import React from 'react';

const AttendanceCard = ({ date, status }) => {
  return (
    <div className='rounded-lg p-4 shadow-md flex justify-between items-center'>
      <h3
        className={`font-bold text-xl ${
          status === 'Present' ? 'text-green-500' : 'text-red-500'
        }`}>
        {status}
      </h3>
      <p className='text-gray-400'>{date}</p>
    </div>
  );
};

export default AttendanceCard;
