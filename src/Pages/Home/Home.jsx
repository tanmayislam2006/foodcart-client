import React from 'react';
import Hero from './Hero';
import DisplayFood from './DisplayFood';
import WhyChoose from './WhyChoose';
import RegularDish from './RegularDish';

const Home = () => {
    return (
        <div>
            <Hero/>
            <DisplayFood/>
            <WhyChoose/>
            <RegularDish/>
        </div>
    );
};

export default Home;