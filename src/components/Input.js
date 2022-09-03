import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, className = '', errors, ...props }, ref) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      {label && <label className='font-semibold'>{label}</label>}
      <input
        ref={ref}
        className={`rounded-lg focus:outline-blue-600 border-2 border-gray-300 py-2 px-4 text-gray-600 placeholder:font-semibold placeholder:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-75 disabled:placeholder:text-gray-700 ${className}`}
        {...props}
      />
      {errors && <p className='text-red-600 text-sm'>{errors.message}</p>}
    </div>
  );
});

export default Input;
