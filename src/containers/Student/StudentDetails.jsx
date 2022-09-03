import React, { useState } from 'react';
import { HiKey, HiUser } from 'react-icons/hi';
import PassModal from './PassModal';

const StudentDetails = ({ student, classrooms }) => {
  const [openPass, setOpenPass] = useState(false);

  return (
    <>
      <PassModal isOpen={openPass} closeModal={() => setOpenPass(false)} />
      <div className='w-full shadow-lg p-8 rounded-lg'>
        <div className='mb-4'>
          <h3 className='font-bold text-gray-600 text-xl'>Details</h3>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-4'>
            <div className='p-2 bg-gray-200 text-gray-500 rounded-full text-4xl'>
              <HiUser />
            </div>
            <div className='text-gray-700'>
              <h3 className='font-bold text-xl'>{`${student?.firstName} ${student?.lastName}`}</h3>
              <h4>{student?.email}</h4>
              <p className='text-gray-500 text-sm'>
                {classrooms?.map((c) => c.name)}{' '}
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpenPass(true)}
            className='relative p-2 bg-yellow-200 flex flex-col items-center text-orange-900 group rounded-full text-xl hover:bg-yellow-300'>
            <HiKey />
            <div className='absolute p-1 top-10 bg-gray-200 rounded-lg text-gray-600 group-hover:block hidden'>
              <p className='text-xs font-semibold'>Change Password</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
