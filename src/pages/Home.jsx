import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import BrandStats from '../components/sections/BrandStats';
import FeatureSection from '../components/sections/FeatureSection';
import BenefitSection from '../components/sections/BenefitSection';
import TestimonialSection from '../components/sections/TestimonialSection';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <HeroSection/>
                <BrandStats/>
                <FeatureSection/>
                <BenefitSection/>
                <TestimonialSection/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;