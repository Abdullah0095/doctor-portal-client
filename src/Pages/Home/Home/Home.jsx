// import React from 'react';


import DentalBanner from "../DentalBanner/DentalBanner";
import InfoCard from "../InfoCard/InfoCard";
import MakeAppontment from "../MakeAppointment/MakeAppontment";
import OurService from "../OurService/OurService";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCard />
            <OurService />
            <DentalBanner />
            <MakeAppontment />
            
        </div>
    );
};

export default Home;