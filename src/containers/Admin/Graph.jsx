import React, { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const Graph = ({ data }) => {
  const lates = data?.filter((l) => l.status === 'Late');
  const presents = data?.filter((p) => p.status === 'Present');

  const classrooms = useMemo(() => {
    return data?.map((d) => {
      const lateNum = lates?.filter(
        (l) => l.classroom.name === d.classroom.name
      );
      const presentNum = presents?.filter(
        (l) => l.classroom.name === d.classroom.name
      );

      return {
        className: d.classroom.name,
        late: lateNum.length,
        present: presentNum.length,
      };
    });
  }, [data, lates, presents]);

  const uniqClass = [
    ...new Map(classrooms?.map((m) => [m.className, m])).values(),
  ];
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart data={uniqClass}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='className' />
        <YAxis />
        <Legend />
        <Bar dataKey='present' fill='#60a5fa' radius={[10, 10, 0, 0]}>
          <LabelList dataKey='present' fill='#ffffff' />
        </Bar>
        <Bar dataKey='late' fill='#5eead4' radius={[10, 10, 0, 0]}>
          <LabelList dataKey='late' fill='#ffffff' />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
