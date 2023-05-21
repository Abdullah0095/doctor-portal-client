// import React from 'react';


import DentalBanner from "../DentalBanner/DentalBanner";
import HomeContact from "../HomeContact/HomeContact";
import InfoCard from "../InfoCard/InfoCard";
import MakeAppontment from "../MakeAppointment/MakeAppontment";
import OurService from "../OurService/OurService";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCard />
            <OurService />
            <DentalBanner />
            <MakeAppontment />
            <Testimonial />
            <HomeContact />
            
        </div>
    );
};

export default Home;