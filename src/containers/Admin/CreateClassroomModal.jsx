import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreateClassroom } from '../../api/createClassroom';
import { useAllClassroom } from '../../api/getAllClassrooms';
import { useAllStudents } from '../../api/getAllStudents';
import { useAllTeachers } from '../../api/getAllTeachers';
import Input from '../../components/Input';
import ModalLayout from '../../components/layout/ModalLayout';

const CreateClassroomModal = ({ isOpen, closeModal }) => {
  const { data: teachers, isValidating: tValid } = useAllTeachers();
  const { data: students, isValidating: sValid } = useAllStudents();
  const { mutate } = useAllClassroom();

  const { execute } = useCreateClassroom();

  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback(
    async (data) => {
      try {
        const payload = {
          teacher: data.teacher,
          name: data.name,
          students: data.student.filter((s) => s !== false),
        };
        await execute(payload);
        toast.success('Created Classroom');
        mutate();
        closeModal();
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [execute, mutate, closeModal]
  );

  return (
    <ModalLayout
      title='Create Classroom'
      isOpen={isOpen}
      closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <Input
          {...register('name')}
          label='Name of Classroom:'
          placeholder='Enter the name...'
        />
        <label className='font-semibold'>Teacher:</label>
        <select
          {...register('teacher')}
          className='border-2 border-gray-300 text-gray-500 rounded-lg py-2 px-4 outline-blue-600 font-semibold'>
          {teachers?.map((teacher) => (
            <option
              value={teacher._id}
              key={
                teacher._id
              }>{`${teacher.firstName} ${teacher.lastName}`}</option>
          ))}
        </select>
        <label className='font-semibold'>Students:</label>
        <div className='grid grid-cols-3'>
          {students?.map((student, index) => (
            <label>
              <input
                type='checkbox'
                value={student._id}
                {...register(`student[${index}]`)}
              />
              {`${student.firstName} ${student.lastName}`}
            </label>
          ))}
        </div>
        <div className='flex items-center justify-end'>
          <button className='py-1 px-4 rounded-lg mt-2 bg-blue-900 text-white hover:bg-blue-500'>
            Create
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default CreateClassroomModal;
