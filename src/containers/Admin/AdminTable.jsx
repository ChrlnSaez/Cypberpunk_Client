import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';

const TableHeaders = () => {
  return (
    <div className='grid grid-cols-4 border-y text-blue-900 py-5 justify-items-center text-lg font-bold'>
      <h3>Name</h3>
      <h3>ID</h3>
      <h3>Classroom</h3>
      <h3>Email</h3>
    </div>
  );
};

const options = [
  {
    label: 'Teacher',
    value: 'teacher',
  },
  {
    label: 'Student',
    value: 'student',
  },
];

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

const AdminTable = ({ isValidating, classrooms, students, teachers }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  return (
    <div className='text-teal-500'>
      <Dropdown
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
      />
      <div className='max-h-[200px] overflow-y-auto'>
        <TableHeaders />
        {isValidating ? (
          <>Loading...</>
        ) : (
          <>
            {selectedValue.value === 'student' ? (
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
            ) : (
              <>
                {teachers?.map((teacher) => {
                  const classroom = classrooms.filter(
                    (classroom) => classroom.teacher._id === teacher._id
                  );
                  return (
                    <TableItems
                      key={teacher._id}
                      data={teacher}
                      classroom={classroom}
                    />
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminTable;
