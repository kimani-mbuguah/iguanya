import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HomeTwo/Banner';
import FeaturedServices from '../components/HomeTwo/FeaturedServices';
import About from '../components/HomeTwo/About';
import Services from '../components/HomeTwo/Services';
import WhyChooseUs from '../components/HomeTwo/WhyChooseUs';
import FunFacts from '../components/Common/FunFacts';
import ProjectGallerySlider from '../components/Common/ProjectGallerySlider';
import OurFeaturesTab from '../components/Common/OurFeaturesTab';
import OurTeam from '../components/Common/OurTeam';
import Solution from '../components/Common/Solution';
import Testimonials from '../components/Common/Testimonials';
import Pricing from '../components/Common/Pricing';
import PartnerWithTitle from '../components/Common/Partner/PartnerWithTitle';
import LatestNews from '../components/Common/LatestNews';
import SubscribeBoxed from '../components/Common/SubscribeBoxed';
import Footer from '../components/Layout/Footer';

class index2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner/>
                <FeaturedServices />
                <About />
                <Services />
                <WhyChooseUs />
                <FunFacts />
                <ProjectGallerySlider />
                <OurFeaturesTab />
                <OurTeam />
                <Solution />
                <Testimonials />
                <Pricing/>
                <PartnerWithTitle />
                <LatestNews />
                <SubscribeBoxed/>
                <Footer/> 
            </>
        );
    }
}

export default index2;