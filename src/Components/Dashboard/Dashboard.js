import React from 'react';
import AreaCharts from '../AreaCharts/AreaCharts';
import SingleLineChart from '../SingleLineChart/SingleLineChart';


const Dashboard = () => {
    return (
        <div className="grid md:grid-cols-2 px-28 py-20">
            

        <SingleLineChart></SingleLineChart>
        <AreaCharts></AreaCharts>
        </div>
    );
};

export default Dashboard;
