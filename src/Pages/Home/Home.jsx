import React from 'react';
import Hero from './Hero';
import DisplayFood from './DisplayFood';
import WhyChoose from './WhyChoose';
import RegularDish from './RegularDish';
import Cheif from './Cheif';
import Taste from './Taste';


const Home = () => {
    return (
        <div>
            <Hero/>
            <DisplayFood/>
            <WhyChoose/>
            <RegularDish/>
            <Cheif/>
            <Taste/>
        </div>
    );
};

export default Home;