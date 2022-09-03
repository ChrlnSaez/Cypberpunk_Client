import useSWR from 'swr';

export const useGetCurrTeacher = () => {
  const response = useSWR('/teacher/current');
  return response;
};
