import React, { useMemo } from 'react';
import { FaUser } from 'react-icons/fa';
import { useAllAttendances } from '../../api/getAllAttendances';
import { useAllClassroom } from '../../api/getAllClassrooms';
import { useAllStudents } from '../../api/getAllStudents';
import { useGetCurrTeacher } from '../../api/getCurrentTeacher';
import HeaderCard from '../../components/HeaderCard';
import TeacherTable from '../../containers/Teacher/TeacherTable';

const TeacherDashboard = () => {
  const { data: students, isValidating: studentValidating } = useAllStudents();
  const { data: classrooms, isValidating: classroomValidating } =
    useAllClassroom();
  const { data: attendances, isValidating: attendanceValidating } =
    useAllAttendances();

  const { data: currTeacher, isValidating: ctValid } = useGetCurrTeacher();

  const isValidating = useMemo(
    () =>
      studentValidating ||
      classroomValidating ||
      attendanceValidating ||
      ctValid,
    [studentValidating, classroomValidating, attendanceValidating, ctValid]
  );

  const today = new Date().toDateString();

  const todayAttendance = useMemo(
    () =>
      attendances?.filter(
        (a) =>
          a.classroom.teacher === currTeacher?._id &&
          new Date(a.createdAt).toDateString() === today
      ),
    [attendances, currTeacher, today]
  );

  const currentClassroom = classrooms?.filter(
    (c) => c.teacher._id === currTeacher?._id
  );

  const studentsInClassroom = students?.filter((s) =>
    currentClassroom?.map((cc) => cc.students.map((s) => s) === s._id)
  );

  const lateStudents = todayAttendance?.filter((ta) => ta.status === 'Late');
  const presentStudents = todayAttendance?.filter(
    (ta) => ta.status === 'Present'
  );

  return (
    <section className='w-full px-4 pb-10'>
      <div className='flex justify-between items-center pb-10'>
        <h1 className='text-3xl font-bold text-blue-900'>Dashboard</h1>
        <div className='flex items-center gap-2 mr-10'>
          <button className='p-2 rounded-full bg-gray-200 text-gray-500 text-3xl'>
            <FaUser />
          </button>
          <div className='leading-3'>
            <h5 className='font-bold text-gray-800'>{`${currTeacher?.firstName} ${currTeacher?.lastName}`}</h5>
            <p className='text-sm font-semibold text-gray-400'>Teacher</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 justify-center items-center gap-4'>
        <HeaderCard
          number={studentsInClassroom?.length}
          label='Number of Students'
        />
        <HeaderCard
          number={presentStudents?.length}
          label='Number of Present'
        />
        <HeaderCard number={lateStudents?.length} label='Number of Late' />
      </div>
      <h1 className='text-2xl font-bold text-teal-500 pt-5'>
        Student Attendances
      </h1>
      <TeacherTable
        todayAttendance={todayAttendance}
        isValidating={isValidating}
      />
    </section>
  );
};

export default TeacherDashboard;
