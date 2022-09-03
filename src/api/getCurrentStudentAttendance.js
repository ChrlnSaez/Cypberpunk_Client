import useSWR from 'swr';

export const useGetCurrStudentAttendance = () => {
  const response = useSWR('/attendance/student/current');
  return response;
};
