import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeNine/Banner';
import Projects from '../components/HomeNine/Projects';
import FunFacts from '../components/Common/FunFacts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import PricingStyleFive from '../components/Pricing/PricingStyleFive';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import LetsGetToWork from '../components/Common/LetsGetToWork';
import Clients from '../components/HomeSeven/Clients';
import SubscribeBoxed from '../components/Common/SubscribeBoxed';
import Footer from '../components/Layout/Footer';

class Index9 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                <Banner />
                <Projects />
                <FunFacts />
                <TestimonialsTwo />
                <PricingStyleFive />
                <OurTeamTwo />
                <LetsGetToWork /> 
                <Clients />
                <SubscribeBoxed />
                <Footer/> 
            </>
        );
    }
}

export default Index9;