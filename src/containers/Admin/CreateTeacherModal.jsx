import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreateTeacher } from '../../api/createTeacher';
import { useAllTeachers } from '../../api/getAllTeachers';
import Input from '../../components/Input';
import ModalLayout from '../../components/layout/ModalLayout';

const CreateTeacherModal = ({ isOpen, closeModal }) => {
  const { register, handleSubmit } = useForm();

  const { execute } = useCreateTeacher();

  const { mutate } = useAllTeachers();

  const onSubmit = useCallback(
    async (data) => {
      try {
        console.log({ data });
        await execute(data);
        toast.success('Created Teacher');
        mutate();
        closeModal();
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [mutate, closeModal, execute]
  );

  return (
    <ModalLayout title='Create Teacher' isOpen={isOpen} closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <Input
          label='First Name:'
          placeholder='Enter the name...'
          {...register('firstName')}
        />
        <Input
          label='Last Name:'
          placeholder='Enter the name...'
          {...register('lastName')}
        />
        <Input
          label='Email:'
          placeholder='Enter the email...'
          {...register('email')}
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

export default CreateTeacherModal;
