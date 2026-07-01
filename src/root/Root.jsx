import React, { Component } from 'react';
import Home from '../home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


class Root extends Component {
    render() {
        return (
            <div className='min-h-screen bg-[#02051F]'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        );
    }
}

export default Root;
