import React from 'react';

const HeaderCard = ({ number, label }) => {
  return (
    <div className='border border-teal-500 rounded-lg shadow-lg p-8'>
      <div className='flex flex-col items-center justify-center text-teal-500 gap-2 text-2xl'>
        <h2 className='font-bold'>{number}</h2>
        <h2 className='font-light'>{label}</h2>
      </div>
    </div>
  );
};

export default HeaderCard;
