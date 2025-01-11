import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main_Layout = () => {
    return (
        <div>
            <div className='bg-success'>
                <Navbar></Navbar>
            </div>
            
            <div className='container mx-auto m-16'>
                 <Outlet></Outlet>
            </div>
           
            <div className='min-h-[calc(100vh-385px)]'></div>
            <Footer></Footer>
        </div>
    );
};

export default Main_Layout;