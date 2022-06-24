import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeSix/BannerSlider';
import FeaturedServices from '../components/HomeSix/FeaturedServices';
import AboutUs from '../components/HomeSix/AboutUs';
import FunFacts from '../components/Common/FunFacts';
import OurServices from '../components/HomeSix/OurServices';
import CaseStudies from '../components/HomeSix/CaseStudies';
import WhyChooseUs from '../components/HomeSix/WhyChooseUs';
import OurFeatures from '../components/HomeSix/OurFeatures';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import PricingStyleFive from '../components/Pricing/PricingStyleFive';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import LetsGetToWork from '../components/Common/LetsGetToWork';
import PartnerWithTitleTwo from '../components/Common/Partner/PartnerWithTitleTwo';
import LatestNewsTwo from '../components/Common/LatestNewsTwo';
import SubscribeBoxedTwo from '../components/Common/SubscribeBoxedTwo';
import Footer from '../components/Layout/Footer';

class Index6 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <BannerSlider />
                <FeaturedServices />
                <AboutUs />
                <FunFacts />
                <OurServices />
                <CaseStudies />
                <WhyChooseUs />
                <OurFeatures />
                <TestimonialsTwo />
                <PricingStyleFive />
                <OurTeamTwo />
                <LetsGetToWork />
                <PartnerWithTitleTwo />
                <LatestNewsTwo />
                <SubscribeBoxedTwo/>
                <Footer/> 
            </>
        );
    }
}

export default Index6;