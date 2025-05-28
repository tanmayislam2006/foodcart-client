import React from 'react';
import Hero from './Hero';
import DisplayFood from './DisplayFood';
import WhyChoose from './WhyChoose';
import RegularDish from './RegularDish';
import Cheif from './Cheif';

const Home = () => {
    return (
        <div>
            <Hero/>
            <DisplayFood/>
            <WhyChoose/>
            <RegularDish/>
            <Cheif/>
        </div>
    );
};

export default Home;