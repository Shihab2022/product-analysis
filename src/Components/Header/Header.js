import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className="flex justify-around items-center md:px-28 py-5 bg-lime-300 px-10 ">
            <div className="h-16 w-16">
            <img src={`https://pluspng.com/img-png/dirt-bike-wheelie-png-menu-800.png`} alt="" />
            </div>
           
         <div className='flex'>
             <CustomLink className="md:ml-10 ml-3 md:text-xl" to='/'>HOME</CustomLink>
           
            <CustomLink className="md:ml-10 ml-3 md:text-xl" to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className="md:ml-10 ml-3 md:text-xl" to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className="md:ml-10 ml-3 md:text-xl" to='/blogs'>BLOGS</CustomLink>
            <CustomLink className="md:ml-10 ml-3 md:text-xl" to='/about'>ABOUT</CustomLink>
         </div>
        </div>
    );
};

export default Header;