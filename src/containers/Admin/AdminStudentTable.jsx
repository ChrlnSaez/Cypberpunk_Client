import React, { useState } from 'react';
import { useMemo } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useAllClassroom } from '../../api/getAllClassrooms';
import { useAllStudents } from '../../api/getAllStudents';
import CreateStudentModal from './CreateStudentModal';
const TableHeaders = () => {
  return (
    <div className='grid grid-cols-4 border-y text-blue-900 py-5 justify-items-center text-lg font-bold'>
      <h3>Student Name</h3>
      <h3>ID</h3>
      <h3>Classroom</h3>
      <h3>Email</h3>
    </div>
  );
};

const TableItems = ({ data, classroom }) => {
  return (
    <div className='grid grid-cols-4 border-b py-2 justify-items-center'>
      <p>{`${data.firstName} ${data.lastName}`}</p>
      <p>{data._id}</p>
      <p>
        {classroom.map((c) => (
          <span>{c.name} </span>
        ))}{' '}
      </p>
      <p>{data.email}</p>
    </div>
  );
};

const AdminStudentTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: students, isValidating: sValid } = useAllStudents();
  const { data: classrooms, isValidating: cValid } = useAllClassroom();

  const isValidating = useMemo(() => sValid || cValid, [sValid, cValid]);
  return (
    <>
      <CreateStudentModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <div className=''>
        <button
          onClick={() => setIsOpen(true)}
          className='font-bold bg-teal-500 rounded p-2 text-white mb-3 flex items-center gap-2 ml-auto'>
          Create New Student
          <FaPlusCircle />
        </button>
        <div className='max-h-[200px] overflow-y-auto'>
          <TableHeaders />
          {isValidating ? (
            <>Loading...</>
          ) : (
            <>
              {students?.map((student) => {
                const classroom = classrooms.filter((classroom) =>
                  classroom.students.some((s) => s._id === student._id)
                );
                return (
                  <TableItems
                    key={student._id}
                    data={student}
                    classroom={classroom}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminStudentTable;
