import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from './Footer/Footer';

const Layout = () => {
    return (
        <div className='bg-primary min-h-screen container mx-auto'>
            <Navbar />
            <div className="grid grid-cols-none sm:grid-cols-gtaf-tab-wrapper md:grid-cols-gtaf-main-wrapper lg:grid-cols-gtaf-main-wrapper xl:grid-cols-gtaf-main-wrapper">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;