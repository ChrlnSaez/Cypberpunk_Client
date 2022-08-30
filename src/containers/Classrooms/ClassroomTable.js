import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';

const TableHeaders = () => {
  return (
    <div className='grid grid-cols-4 border-y text-blue-900 py-5 justify-items-center text-lg font-bold'>
      <h3>Class Name</h3>
      <h3>ID</h3>
      <h3>Teacher</h3>
      <h3>No. Of Students</h3>
      <h3>Start Date</h3>
      <h3>End Date</h3>
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

const TableItems = ({ data, name }) => {
  return (
    <div className='grid grid-cols-4 border-b py-2 justify-items-center'>
      <p>{`${data.firstName} ${data.lastName}`}</p>
      <p>{data._id}</p>
      <p>{name}</p>
    </div>
  );
};

const ClassroomTable = ({ isValidating, classrooms }) => {
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
            {classrooms?.map((classroom, classIndex) => {
              if (selectedValue.value === 'student') {
                return classroom.students.map((student, studentIndex) => (
                  <TableItems
                    data={student}
                    name={classroom.name}
                    key={studentIndex}
                  />
                ));
              }
              return (
                <TableItems
                  data={classroom.teacher}
                  name={classroom.name}
                  key={classIndex}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ClassroomTable;
