import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import BrandStats from '../components/sections/BrandStats';
import FeatureSection from '../components/sections/FeatureSection';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <HeroSection/>
                <BrandStats/>
                <FeatureSection/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;