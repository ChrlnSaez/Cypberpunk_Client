import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreateStudent } from '../../api/createStudent';
import { useAllStudents } from '../../api/getAllStudents';
import Input from '../../components/Input';
import ModalLayout from '../../components/layout/ModalLayout';

const CreateStudentModal = ({ isOpen, closeModal }) => {
  const { register, handleSubmit } = useForm();

  const { execute } = useCreateStudent();

  const { mutate } = useAllStudents();

  const onSubmit = useCallback(
    async (data) => {
      try {
        await execute(data);
        toast.success('Created Student');
        mutate();
        closeModal();
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [mutate, closeModal, execute]
  );

  return (
    <ModalLayout title='Create Student' isOpen={isOpen} closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <Input
          {...register('firstName')}
          label='First Name:'
          placeholder='Enter the name...'
        />
        <Input
          {...register('lastName')}
          label='Last Name:'
          placeholder='Enter the name...'
        />
        <Input
          {...register('email')}
          label='Email:'
          placeholder='Enter the email...'
        />
        <div className='flex items-center justify-end'>
          <button className='py-1 px-4 rounded-lg mt-2 bg-blue-900 text-white hover:bg-blue-500'>
            Create
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default CreateStudentModal;
