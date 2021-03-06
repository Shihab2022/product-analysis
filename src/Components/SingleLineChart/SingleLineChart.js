import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useGetChartData from "../../Hooks/GetChartData";

const SingleLineChart = () => {
  const [chartData] = useGetChartData();
  return (
    <LineChart width={500} height={500} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <Line dataKey={"investment"} stroke="#8884d8"></Line>
      <XAxis dataKey="month"></XAxis>
      <Tooltip />
      <YAxis></YAxis>
    </LineChart>
  );
};

export default SingleLineChart;
