import React, { useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSignIn } from '../../api/signin';
import '../../assets/styles/login.css';
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
  const [role, setRole] = useState('student');

  const { register, handleSubmit } = useForm();
  const { execute } = useSignIn();
  const auth = useAuth();

  const handleOnChange = useCallback((e) => {
    setRole(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    async (data) => {
      try {
        const {
          data: { token },
        } = await execute(data, role);
        localStorage.setItem('token', token);

        auth.signIn();
        toast.success('Welcome!');
      } catch (error) {
        toast.error(error.response.data.error);
      }
    },
    [execute, role, auth]
  );

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className='cover' id='login'>
      <h1 className='text-2xl font-bold mt-10'>LOGIN</h1>
      <input type='email' placeholder='Email' {...register('email')} />
      <input type='password' placeholder='Password' {...register('password')} />
      <select name='Role' id='Role' onChange={handleOnChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button className='login-btn font-bold bg-gradient-to-tr from-PrimaryHoverBlue400 to-PrimaryLightblue900'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
