import useSWR from 'swr';

export const useGetCurrStudent = () => {
  const response = useSWR('/student/current');
  return response;
};
