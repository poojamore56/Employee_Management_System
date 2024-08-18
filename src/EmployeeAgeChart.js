import React, { useEffect, useState } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EmployeeAgeChart = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
       
        const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001');
        const employeeData = await response.json();
        
        
        
        const ageByCategory = new Map();
        for (let employee of employeeData) {
          let age = employee.age;
          let ageCategory=parseInt(age/10)*10;

          if (ageByCategory.has(ageCategory)) {
            ageByCategory.set(ageCategory, ageByCategory.get(ageCategory) + 1);
          } else {
            ageByCategory.set(ageCategory, 1);
          }
        }

        const result = [];
        for (let [ageCategory, count] of ageByCategory.entries()) {
          let category = `${ageCategory}-${ageCategory + 9}`;
          result.push({ ageGroup: category, count: ageByCategory.get(ageCategory)+1 });
        }

        setData(result);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);
 


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
