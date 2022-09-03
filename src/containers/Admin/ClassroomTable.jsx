import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useAllClassroom } from '../../api/getAllClassrooms';
import CreateClassroomModal from './CreateClassroomModal';

const TableHeaders = () => {
  return (
    <div className='grid grid-cols-4 border-y text-blue-900 py-5 justify-items-center text-lg font-bold'>
      <h3>Classroom Name</h3>
      <h3>ID</h3>
      <h3>Teacher</h3>
      <h3>No. Of Students</h3>
    </div>
  );
};

const TableItems = ({ data }) => {
  console.log({ data });
  return (
    <div className='grid grid-cols-4 border-b py-2 justify-items-center'>
      <p>{data.name}</p>
      <p>{data._id}</p>
      <p>{`${data.teacher.firstName} ${data.teacher.lastName}`}</p>
      <p>{data.students.length}</p>
    </div>
  );
};

const ClassroomTable = () => {
  const { isValidating, data } = useAllClassroom();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CreateClassroomModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
      <div className=''>
        <button
          onClick={() => setIsOpen(true)}
          className='font-bold bg-teal-500 rounded p-2 text-white mb-3 flex items-center gap-2 ml-auto'>
          Create Classroom
          <FaPlusCircle />
        </button>
        <div className=''>
          <TableHeaders />
          {isValidating ? (
            <>Loading...</>
          ) : (
            <>
              {data.map((classroom) => (
                <TableItems key={classroom._id} data={classroom} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ClassroomTable;
