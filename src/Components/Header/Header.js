import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-around items-center md:px-28 py-5 bg-lime-300 px-10 ">
            <div className="h-16 w-16">
            <img src={`https://pluspng.com/img-png/dirt-bike-wheelie-png-menu-800.png`} alt="" />
            </div>
           
         <div className=''>
            <Link className="md:ml-10 ml-3" to='/'>HOME</Link>
            <Link className="md:ml-10 ml-3" to='/reviews'>REVIEWS</Link>
            <Link className="md:ml-10 ml-3" to='/dashboard'>DASHBOARD</Link>
            <Link className="md:ml-10 ml-3" to='/blogs'>BLOGS</Link>
            <Link className="md:ml-10 ml-3" to='/about'>ABOUT</Link>
         </div>
        </div>
    );
};

export default Header;