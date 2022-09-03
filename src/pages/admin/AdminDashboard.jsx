import React, { useMemo } from 'react';
import { useAllAttendances } from '../../api/getAllAttendances';
import { useAllClassroom } from '../../api/getAllClassrooms';
import { useAllStudents } from '../../api/getAllStudents';
import { useAllTeachers } from '../../api/getAllTeachers';
import HeaderCard from '../../components/HeaderCard';
import AdminTable from '../../containers/Admin/AdminTable';
import Graph from '../../containers/Admin/Graph';

const AdminDashboard = () => {
  const { data: students, isValidating: studentValidating } = useAllStudents();
  const { data: teachers, isValidating: teacherValidating } = useAllTeachers();
  const { data: classrooms, isValidating: classroomValidating } =
    useAllClassroom();
  const { data: attendances, isValidating: attendanceValidating } =
    useAllAttendances();

  console.log({ students, teachers });

  const isValidating = useMemo(
    () =>
      studentValidating ||
      teacherValidating ||
      classroomValidating ||
      attendanceValidating,
    [
      studentValidating,
      teacherValidating,
      classroomValidating,
      attendanceValidating,
    ]
  );

  console.log(attendances);

  return (
    <section className='w-full px-4 pb-10'>
      <h1 className='text-3xl font-bold text-blue-900 pb-10'>Dashboard</h1>
      <div className='grid grid-cols-3 justify-center items-center gap-4'>
        <HeaderCard number={teachers?.length} label='Number of Teachers' />
        <HeaderCard number={students?.length} label='Number of Students' />
        <HeaderCard number={classrooms?.length} label='Number of Classrooms' />
      </div>
      <h1 className='text-2xl font-bold text-teal-500 pt-5'>
        Attendance Today
      </h1>
      <div className='mb-5'>
        <Graph data={attendances} />
      </div>
      <AdminTable
        students={students}
        teachers={teachers}
        classrooms={classrooms}
        isValidating={isValidating}
      />
    </section>
  );
};

export default AdminDashboard;
