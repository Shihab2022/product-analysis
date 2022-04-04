import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import useGetChartData from "../../Hooks/GetChartData";

const BarCharts = () => {

    const [chartData]=useGetChartData()
    return (
        <BarChart
          width={600}
          height={500}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          <Bar dataKey="sell" fill="#ffc658" />
        </BarChart>
      );
};

export default BarCharts;