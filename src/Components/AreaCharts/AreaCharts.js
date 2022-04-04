import React, { useEffect, useState } from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';


const AreaCharts = () => {
    const [chartData,setChartData]=useState([])
    useEffect(() =>{
        fetch('chartData.json')
        .then(res=>res.json())
        .then(data=>setChartData(data))
    },[])
    console.log(chartData)
    return (
      <AreaChart
        width={600}
        height={500}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="sell"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    );
};

export default AreaCharts;