import { useCallback, useState } from 'react';
import client from '../lib/client';

const createTeacher = async (payload) => {
  const response = await client.post('/auth/teacher/register', payload);
  return response;
};

export const useCreateTeacher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (payload) => {
    try {
      setIsLoading(true);
      const response = await createTeacher(payload);
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
