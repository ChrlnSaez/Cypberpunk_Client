import React from 'react';
import AdminStudentTable from '../../containers/Admin/AdminStudentTable';

const AdminStudents = () => {
  return (
    <div className='px-4 '>
      <h1 className='text-3xl font-bold text-blue-900 pb-10'>Students</h1>
      <AdminStudentTable />
    </div>
  );
};

export default AdminStudents;
