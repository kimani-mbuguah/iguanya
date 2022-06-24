import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import BannerSlider from '../components/HomeEight/BannerSlider';
import FeaturedSolutions from '../components/HomeEight/FeaturedSolutions';
import AboutUs from '../components/HomeEight/AboutUs';
import Services from '../components/HomeEight/Services';
import Projects from '../components/HomeEight/Projects';
import FunFacts from '../components/Common/FunFacts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import PricingStyleFour from '../components/Pricing/PricingStyleFour';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import Faq from '../components/HomeSeven/Faq';
import Clients from '../components/HomeSeven/Clients';
import RecentStory from '../components/HomeEight/RecentStory';
import FreeTrial from '../components/HomeEight/FreeTrial';
import Footer from '../components/Layout/Footer';

class Index8 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                <BannerSlider />
                <FeaturedSolutions />
                <AboutUs />
                <Services />
                <Projects />
                <FunFacts />
                <TestimonialsTwo />
                <PricingStyleFour />
                <OurTeamTwo />
                <Faq />
                <Clients />
                <FreeTrial />
                <RecentStory />
                <Footer/> 
            </>
        );
    }
}

export default Index8;