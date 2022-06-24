import React, { Component } from 'react';
import NavbarFour from '../components/Layout/NavbarFour';
import MainBanner from './../components/HomeEleven/MainBanner';
import TopServices from '../components/HomeEleven/TopServices';
import Features from '../components/HomeEleven/Features';
import Partners from '../components/HomeEleven/Partners';
import AboutContent from '../components/HomeEleven/AboutContent';
import WhyChooseUs from '../components/HomeEleven/WhyChooseUs';
import Services from '../components/HomeEleven/Services';
import FunFacts from '../components/HomeEleven/FunFacts';
import ProvideAdvancedSecurity from '../components/HomeEleven/ProvideAdvancedSecurity';
import Overview from '../components/HomeEleven/Overview';
import Feedbacks from '../components/HomeEleven/Feedbacks';
import LatestNews from '../components/HomeEleven/LatestNews';
import NewsletterForm from '../components/HomeEleven/NewsletterForm';
import FooterThree from '../components/Layout/FooterThree';

class Index11 extends Component {
    render() {
        return (
            <>  
                <NavbarFour />

                <MainBanner />

                <div className="background-with-black-color">

                    <TopServices />

                    <Features />

                    <Partners />

                    <AboutContent />

                    <WhyChooseUs />

                    <Services />

                    <FunFacts />

                    <ProvideAdvancedSecurity />

                    <Overview />

                    <Feedbacks />

                    <LatestNews />

                </div>

                <NewsletterForm />
 
                <FooterThree /> 
            </>
        );
    }
}

export default Index11;