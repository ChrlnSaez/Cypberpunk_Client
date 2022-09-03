import React from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSignIn } from '../../api/signin';
import Input from '../../components/Input';
import { useAuth } from '../../context/authContext';

const options = [
  {
    label: 'Student',
    value: 'student',
  },
  {
    label: 'Teacher',
    value: 'teacher',
  },
];

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { execute } = useSignIn();
  const auth = useAuth();

  const handleOnSubmit = useCallback(
    async (data) => {
      try {
        const {
          data: { token },
        } = await execute(data);
        localStorage.setItem('token', token);

        auth.signIn();
        toast.success('Welcome!');
      } catch (error) {
        toast.error(error.response.data.error);
      }
    },
    [execute, auth]
  );

  return (
    <div className='w-full flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className='bg-white flex flex-col w-[500px] mr-24 p-4 gap-4 rounded-lg'>
        <div className='bg-gray-200 rounded-lg w-full p-2'>
          <h3 className='font-bold text-lg text-center'>Admin Credentials</h3>
          <p>Email: todxamjqdcbxbjwyqr@bvhrs.com</p>
          <p>Password: fV9nue2gjgiCA21AERkxyy</p>
        </div>
        <h1 className='text-2xl font-bold'>LOGIN</h1>
        <Input
          placeholder='Enter email address...'
          label='Email Address'
          {...register('email')}
        />
        <Input
          type='password'
          placeholder='Enter password...'
          label='Password'
          {...register('password')}
        />
        <select
          {...register('role')}
          className='border-2 border-gray-300 text-gray-500 rounded-lg py-2 px-4 outline-blue-600 font-semibold'>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className='font-bold bg-blue-900 text-white rounded-lg p-2'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
