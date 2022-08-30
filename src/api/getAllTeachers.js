import useSWR from 'swr';

export const useAllTeachers = () => {
  const response = useSWR('/teacher');
  return response;
};
