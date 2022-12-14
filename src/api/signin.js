import { useCallback, useState } from 'react';
import client from '../lib/client';

const signIn = async (payload) => {
  let response = null;
  if (payload.role === 'student') {
    response = await client.post('/auth/student/login', payload);
  } else {
    response = await client.post('/auth/teacher/login', payload);
  }

  return response;
};

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (payload) => {
    try {
      setIsLoading(true);
      const response = await signIn(payload);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, data, execute };
};
