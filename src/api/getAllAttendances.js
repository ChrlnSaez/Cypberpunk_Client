import useSWR from 'swr';

export const useAllAttendances = () => {
  const response = useSWR('/attendance');
  return response;
};
