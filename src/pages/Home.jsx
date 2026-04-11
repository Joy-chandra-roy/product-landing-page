import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import BrandStats from '../components/sections/BrandStats';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <HeroSection/>
                <BrandStats/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;