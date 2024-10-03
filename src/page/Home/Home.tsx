import React from 'react';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import State from '../../components/home/State';
import Blog from '../../components/home/Blog';
import Achievment from '../../components/home/Achievment';
import TestimonialSection from '../../components/home/Testimonial';
import Team from '../../components/home/Team';

const Home:React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <State />
            <Team />
            <TestimonialSection />
            <Achievment />
            <Blog />
        </div>
    );
};

export default Home;