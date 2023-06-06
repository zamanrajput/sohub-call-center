import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shares/Navbar/Navbar';

const Main = () => {
    return (
        <div className='rounded  bg-slate-100'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;