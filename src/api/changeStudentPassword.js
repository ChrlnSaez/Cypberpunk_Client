import { useCallback, useState } from 'react';
import client from '../lib/client';

const changeStudentPassword = async (payload) => {
  const response = await client.patch('/student/change-password', payload);
  return response;
};

export const useChangeStudentPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (payload) => {
    try {
      setIsLoading(true);
      const response = await changeStudentPassword(payload);
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
