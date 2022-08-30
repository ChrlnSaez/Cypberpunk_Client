import useSWR from 'swr';

export const useAllStudents = () => {
  const response = useSWR('/student');
  return response;
};
