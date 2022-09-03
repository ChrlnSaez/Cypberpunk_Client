import React from 'react';
import ClassroomTable from '../../containers/Admin/ClassroomTable';

const AdminClassroom = () => {
  return (
    <div className='px-4 '>
      <h1 className='text-3xl font-bold text-blue-900 pb-10'>Classroom</h1>
      <ClassroomTable />
    </div>
  );
};

export default AdminClassroom;
