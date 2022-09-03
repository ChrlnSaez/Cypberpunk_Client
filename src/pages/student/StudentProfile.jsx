import React from 'react';
import Report from '../../containers/Student/Report';
import StudentDetails from '../../containers/Student/StudentDetails';
import AttendanceSection from '../../containers/Student/AttendanceSection';
import ToggleButton from '../../components/ToggleButton';
import { useGetCurrStudent } from '../../api/getCurrentStudent';
import { useAllClassroom } from '../../api/getAllClassrooms';
import { useGetCurrStudentAttendance } from '../../api/getCurrentStudentAttendance';
import { useMemo } from 'react';

const StudentDashboard = () => {
  const { data: currStudent, isValidating: currValid } = useGetCurrStudent();
  const { data: classrooms, isValidating: cValid } = useAllClassroom();
  const {
    data: currStuAttendance,
    isValidating: csaValid,
    mutate,
  } = useGetCurrStudentAttendance();

  const currClassrooms = classrooms?.filter((c) =>
    c.students.some((cs) => cs._id === currStudent?._id)
  );

  const numLate = currStuAttendance?.filter(
    (csa) => csa.status === 'Late'
  ).length;

  const numPresent = currStuAttendance?.filter(
    (csa) => csa.status === 'Present'
  ).length;

  const calculatePercentage = (num) => {
    return ((num * 100) / currStuAttendance?.length).toFixed(1);
  };

  const isValidating = useMemo(
    () => currValid || cValid || csaValid,
    [currValid, cValid, csaValid]
  );

  return (
    <section className='w-full px-4 pb-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-blue-900 pb-10'>My Profile</h1>
        <ToggleButton currAttendance={currStuAttendance} />
      </div>
      <div className='flex flex-col gap-y-8'>
        <div className='flex gap-x-4'>
          <Report
            present={numPresent}
            late={numLate}
            latePerc={
              isNaN(calculatePercentage(numLate))
                ? 0
                : calculatePercentage(numLate)
            }
            presentPerc={
              isNaN(calculatePercentage(numPresent))
                ? 0
                : calculatePercentage(numPresent)
            }
          />
          <StudentDetails student={currStudent} classrooms={currClassrooms} />
        </div>
        <AttendanceSection attendances={currStuAttendance} mutate={mutate} />
      </div>
    </section>
  );
};

export default StudentDashboard;
