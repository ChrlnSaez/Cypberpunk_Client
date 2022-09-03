import React from 'react';
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import { MdCheck, MdOutlineWarningAmber } from 'react-icons/md';
import IconCard from './IconCard';

const StudentProfile = ({ present, late, latePerc, presentPerc }) => {
  return (
    <div className='w-full shadow-lg p-8 rounded-lg'>
      <div className='mb-4'>
        <h3 className='font-bold text-gray-600 text-xl'>Attendance Report</h3>
      </div>
      <div className='grid grid-cols-4'>
        <IconCard
          color='bg-blue-200'
          Icon={<MdCheck className='text-blue-500' />}
          data={present}
          label='Present'
        />
        <IconCard
          color='bg-red-200'
          Icon={<MdOutlineWarningAmber className='text-red-500' />}
          data={late}
          label='Late'
        />
        <IconCard
          color='bg-violet-200'
          Icon={<AiOutlineRise className='text-violet-500' />}
          data={`${presentPerc}%`}
          label='Avg. Present'
        />
        <IconCard
          color='bg-pink-200'
          Icon={<AiOutlineFall className='text-pink-500' />}
          data={`${latePerc}%`}
          label='Avg. Late'
        />
      </div>
    </div>
  );
};

export default StudentProfile;
