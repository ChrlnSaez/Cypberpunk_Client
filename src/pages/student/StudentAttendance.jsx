import React from 'react';
import dayjs from 'dayjs';
import { useGetCurrStudentAttendance } from '../../api/getCurrentStudentAttendance';

const StudentAttendance = () => {
  const { data, isValidating } = useGetCurrStudentAttendance();

  return (
    <div className='px-4 '>
      <h1 className='text-3xl font-bold text-blue-900 pb-10'>
        Attendance History
      </h1>
      <div className='md:ml-0 md:mt-0 ml-0 lg:mt-22 mt-16 w-full md:-mr-96 h-screen'>
        <div className='overflow-auto rounded bg-gray-200'>
          {isValidating ? (
            <>Loading...</>
          ) : (
            <table class='w-full bg-gray-100'>
              <thead className='bg-blue-900'>
                <tr className='text-gray-100 p-5'>
                  <th className='py-2'>Date</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {data?.map((a) => (
                  <tr>
                    <td>{new Date(a.createdAt).toDateString()}</td>
                    <td>{a.status}</td>
                    <td>{dayjs(a.createdAt).format('hh:mm A')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
