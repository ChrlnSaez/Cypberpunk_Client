import React from 'react';
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
  // class name
  // late number
  // present number

  const arr = data
    ?.map((attendance) => attendance?.classroom.name)
    .filter((v, i, vids) => vids.indexOf(v) !== i);

  const duplicates = data?.filter((obj) => arr.includes(obj.classroom.name));
  console.log(duplicates);
  return (
    <>hi</>
    // <ResponsiveContainer width='100%' height={400}>
    //   <BarChart data={data}>
    //     <CartesianGrid strokeDasharray='3 3' />
    //     <XAxis dataKey='name' />
    //     <YAxis />
    //     <Legend />
    //     <Bar dataKey='Present' fill='#60a5fa' radius={[10, 10, 0, 0]}>
    //       <LabelList dataKey={data.} fill='#ffffff' />
    //     </Bar>
    //     <Bar dataKey='Absent' fill='#5eead4' radius={[10, 10, 0, 0]}>
    //       <LabelList dataKey='Absent' fill='#ffffff' />
    //     </Bar>
    //   </BarChart>
    // </ResponsiveContainer>
  );
};

export default Graph;
