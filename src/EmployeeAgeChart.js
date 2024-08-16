import React from 'react';
import db from './dummyDatabase';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { ageGroup: '20-29', count: 12 },
//   { ageGroup: '30-39', count: 4 },
//   { ageGroup: '40-49', count: 6 },
//   { ageGroup: '50-59', count: 9 },
//   { ageGroup: '60-69', count: 15 },
// ];
  const data = db.getAgeByCategory();
  console.log("this is data", data);



const EmployeeAgeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ageGroup" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EmployeeAgeChart;
