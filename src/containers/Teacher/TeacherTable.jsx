import React from 'react';
import { useMemo } from 'react';
import { useAllAttendances } from '../../api/getAllAttendances';
import { useGetCurrTeacher } from '../../api/getCurrentTeacher';

const TableHeaders = () => {
  return (
    <div className='grid grid-cols-4 border-y text-blue-900 py-5 justify-items-center text-lg font-bold'>
      <h3>Name</h3>
      <h3>ID</h3>
      <h3>Email</h3>
      <h3>Status</h3>
    </div>
  );
};

const TableItems = ({ data }) => {
  return (
    <div className='grid grid-cols-4 border-b py-2 justify-items-center'>
      <p>{`${data.student.firstName} ${data.student.lastName}`}</p>
      <p>{data._id}</p>
      <p>{data.student.email}</p>
      <p>{data.status}</p>
    </div>
  );
};

const TeacherTable = ({ isValidating, todayAttendance }) => {
  return (
    <div className='text-teal-500'>
      <div className='max-h-[200px] overflow-y-auto'>
        <TableHeaders />
        {isValidating ? (
          <>Loading...</>
        ) : (
          <>
            {todayAttendance.map((na) => (
              <TableItems data={na} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherTable;
