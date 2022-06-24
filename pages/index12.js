import React, { Component } from 'react';
import TopHeader from '../components/HomeTwelve/TopHeader';
import NavbarThree from '../components/Layout/NavbarThree';
import MainBanner from './../components/HomeTwelve/MainBanner';
import FunFacts from '../components/HomeTwelve/FunFacts';
import OurFeatures from '../components/HomeTwelve/OurFeatures';
import AboutContent from '../components/HomeTwelve/AboutContent';
import Partners from '../components/HomeTwelve/Partners';
import Services from '../components/HomeTwelve/Services';
import WhyChooseUs from '../components/HomeTwelve/WhyChooseUs';
import Overview from '../components/HomeTwelve/Overview';
import Feedbacks from '../components/HomeTwelve/Feedbacks';
import LatestNews from '../components/HomeTwelve/LatestNews';
import NewsletterForm from './../components/HomeTwelve/NewsletterForm';
import FooterTwo from '../components/Layout/FooterTwo';

class Index12 extends Component {
    render() {
        return (
            <>  
                <TopHeader />

                <NavbarThree />

                <MainBanner />

                <FunFacts />

                <OurFeatures />

                <AboutContent />

                <Partners />

                <Services />

                <WhyChooseUs />

                <Overview />

                <Feedbacks />

                <LatestNews />

                <NewsletterForm />
               
                <FooterTwo /> 
            </>
        );
    }
}

export default Index12;