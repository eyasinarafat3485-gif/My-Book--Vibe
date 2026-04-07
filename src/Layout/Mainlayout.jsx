import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Mainlayout;