import React from "react";
import AreaCharts from "../AreaCharts/AreaCharts";
import BarCharts from "../BarCharts/BarCharts";
import SingleLineChart from "../SingleLineChart/SingleLineChart";

const Dashboard = () => {
  return (
    <div className="grid sm:grid-cols-2 md:px-28 px-5 py-10">
      <div className="my-5 md:w-[100%] w-[60%] ">
          <h1 className='text-3xl mb-16 font-bold text-center text-lime-800'> Single line chart for investment .</h1>
        <SingleLineChart></SingleLineChart>
      </div>
      <div className="my-5">
      <h1 className='text-3xl mb-16 font-bold text-center text-lime-800'> Area  chart for investment vs revenue vs sell .</h1>
        <AreaCharts></AreaCharts>
      </div>

      <div className="mb-10 mt-16">
      <h1 className='text-3xl mb-16 font-bold text-center text-yellow-700'> Bar  chart for investment vs revenue vs sell .</h1>
        <BarCharts></BarCharts>
      </div>
    </div>
  );
};

export default Dashboard;
