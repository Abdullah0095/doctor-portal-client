// import React from 'react';


import InfoCard from "../InfoCard/InfoCard";
import OurService from "../OurService/OurService";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCard />
            <OurService />
            
        </div>
    );
};

export default Home;