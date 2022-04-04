import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SingleLineChart = () => {
    const [data,setData]=useState([])
    useEffect(() =>{
        fetch('chartData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
return (
    <LineChart width={500} height={500} data={data}>
    <Line dataKey={'investment'} stroke="#8884d8"></Line>
    <XAxis dataKey="month"></XAxis>
    <Tooltip />
    <YAxis></YAxis>
</LineChart>
);
};

export default SingleLineChart;