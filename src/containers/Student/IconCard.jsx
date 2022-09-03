import React from 'react';

const IconCard = ({ Icon, label, data, color }) => {
  return (
    <div className='flex items-start gap-x-2 justify-center'>
      <div className={`p-2 rounded-full mt-1 text-2xl ${color}`}>{Icon}</div>
      <div className='flex flex-col'>
        <h4 className='text-gray-700 font-bold text-3xl'>{data}</h4>
        <p className='text-gray-400 font-semibold text-lg'>{label}</p>
      </div>
    </div>
  );
};

export default IconCard;
