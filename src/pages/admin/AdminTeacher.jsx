import React from 'react';
import AdminTeacherTable from '../../containers/Admin/AdminTeacherTable';

const AdminTeacher = () => {
  return (
    <div className='px-4 '>
      <h1 className='text-3xl font-bold text-blue-900 pb-10'>Teachers</h1>
      <AdminTeacherTable />
    </div>
  );
};

export default AdminTeacher;
