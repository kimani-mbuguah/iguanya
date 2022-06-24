import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HomeSeven/Banner';
import Features from '../components/HomeSeven/Features';
import WhatWeDo from '../components/HomeSeven/WhatWeDo';
import WhyChooseUs from '../components/HomeSeven/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import Faq from '../components/HomeSeven/Faq';
import Clients from '../components/HomeSeven/Clients';
import LetsGetToWork from '../components/Common/LetsGetToWork';
import LatestNewsTwo from '../components/Common/LatestNewsTwo';
import SubscribeBoxedTwo from '../components/Common/SubscribeBoxedTwo';
import Footer from '../components/Layout/Footer';
class Index7 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Features />
                <WhatWeDo />
                <WhyChooseUs />
                <FunFactsTwo />
                <TestimonialsTwo />
                <PricingStyleThree />
                <OurTeamTwo />
                <Faq />
                <Clients />
                <LetsGetToWork />
                <LatestNewsTwo />
                <SubscribeBoxedTwo/>
                <Footer/> 
            </>
        );
    }
}

export default Index7;