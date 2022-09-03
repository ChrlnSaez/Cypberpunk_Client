import React from 'react';
import { useMemo } from 'react';
import { useAllClassroom } from '../../api/getAllClassrooms';
import { useAllStudents } from '../../api/getAllStudents';
import { useGetCurrTeacher } from '../../api/getCurrentTeacher';

const TeacherStudents = () => {
  const { data: classrooms, isValidating: cValid } = useAllClassroom();
  const { data: students, isValidating: sValid } = useAllStudents();
  const { data: currTeacher, isValidating: ctValid } = useGetCurrTeacher();

  const currentClassroom = classrooms?.filter(
    (c) => c.teacher._id === currTeacher?._id
  );

  const studentsInClassroom = students?.filter((s) =>
    currentClassroom?.map((cc) => cc.students.map((s) => s) === s._id)
  );

  const isValidating = useMemo(
    () => cValid || sValid || ctValid,
    [cValid, sValid, ctValid]
  );

  return (
    <div className='px-4 '>
      <h1 className='text-3xl font-bold text-blue-900 pb-10'>Students</h1>
      <div className='md:ml-0 md:mt-0 ml-0 lg:mt-22 mt-16 w-full md:-mr-96 h-screen'>
        <div className='flex justify-end mt-8 font-bold'></div>
        <div className='overflow-auto rounded bg-gray-200'>
          {isValidating ? (
            <>Loading...</>
          ) : (
            <table class='w-full bg-gray-100'>
              <thead className='bg-blue-900'>
                <tr className='text-gray-100 p-5'>
                  <th className='py-2'>First Name</th>
                  <th>Last Name</th>
                  <th>ID</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {studentsInClassroom?.map((sc) => (
                  <tr>
                    <td>{sc.firstName}</td>
                    <td>{sc.lastName}</td>
                    <td>{sc._id}</td>
                    <td>{sc.email}</td>
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

export default TeacherStudents;
