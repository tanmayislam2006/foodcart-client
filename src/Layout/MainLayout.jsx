import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    const location=useLocation()
    return (
        <div className="min-h-screen max-w-7xl mx-auto ">
            {location.pathname !=='/' && <Navbar />}
            <main className="flex-1 flex justify-center items-start">
                <div className="w-full min-h-[calc(100vh-220px)]">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;