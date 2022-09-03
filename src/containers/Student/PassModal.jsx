import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useChangeStudentPassword } from '../../api/changeStudentPassword';
import Input from '../../components/Input';
import ModalLayout from '../../components/layout/ModalLayout';

const PassModal = ({ isOpen, closeModal }) => {
  const { register, handleSubmit } = useForm();

  const { execute } = useChangeStudentPassword();

  const onSubmit = useCallback(
    async (data) => {
      try {
        await execute(data);
        toast.success('Successfully changed password');
        closeModal();
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    },
    [execute, closeModal]
  );

  return (
    <ModalLayout
      title='Change Password'
      isOpen={isOpen}
      closeModal={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-2 items-end'>
        <Input
          {...register('currentPassword')}
          label='Current Password'
          type='password'
        />
        <Input
          {...register('newPassword')}
          label='New Password'
          type='password'
        />
        <Input
          {...register('confirmationPassword')}
          label='Confirm New Password'
          type='password'
        />
        <button className='py-1 px-4 rounded-lg mt-2 bg-blue-900 text-white hover:bg-blue-500'>
          Save
        </button>
      </form>
    </ModalLayout>
  );
};

export default PassModal;
