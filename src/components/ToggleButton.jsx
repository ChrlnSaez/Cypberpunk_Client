import React, { useMemo } from 'react';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useGetCurrStudentAttendance } from '../api/getCurrentStudentAttendance';
import { useTimeIn } from '../api/timeIn';

const ToggleButton = () => {
  const today = new Date().toDateString();

  const { data, mutate } = useGetCurrStudentAttendance();

  const isAttendanceToday = useMemo(
    () => data?.filter((ca) => new Date(ca.createdAt).toDateString() === today),
    [data, today]
  );

  const { execute } = useTimeIn();

  const handleAttendance = useCallback(async () => {
    if (isAttendanceToday?.length > 0) return toast.error('Already timed in');
    await execute();
    toast.success('Timed in');
    mutate();
  }, [isAttendanceToday, execute, mutate]);

  return (
    <button
      onClick={handleAttendance}
      className={`p-2 rounded-lg font-semibold ${
        isAttendanceToday?.length > 0
          ? 'text-green-500 bg-green-200 hover:bg-green-300'
          : 'text-gray-500 bg-gray-200 hover:bg-gray-300'
      }`}>
      Time in
    </button>
  );
};

export default ToggleButton;
