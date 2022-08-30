import useSWR from 'swr';

export const useAllClassroom = () => {
  const response = useSWR('/classroom');
  return response;
};
