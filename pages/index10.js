import React, { Component } from 'react';
import NavbarThree from '../components/Layout/NavbarThree';
import Tradevalue from '../components/HomeTen/TradeValue';
import MainBanner from '../components/HomeTen/MainBanner';
import Stats from '../components/HomeTen/Stats';
import AboutOurCompany from '../components/HomeTen/AboutOurCompany';
import EarningPlatform from '../components/HomeTen/EarningPlatform';
import GetStrated from '../components/HomeTen/GetStrated';
import KeyFeatures from './../components/HomeTen/KeyFeatures';
import StartMiningCrypto from '../components/HomeTen/StartMiningCrypto';
import StartTradingAndEarning from '../components/HomeTen/StartTradingAndEarning';
import WhyChooseUs from '../components/HomeTen/WhyChooseUs';
import Feedbacks from '../components/HomeTen/Feedbacks';
import MobileApp from '../components/HomeTen/MobileApp';
import LatestNews from '../components/HomeTen/LatestNews';
import NewsletterForm from '../components/HomeTen/NewsletterForm';
import FooterTwo from '../components/Layout/FooterTwo';

class Index10 extends Component {
    render() {
        return (
            <>  
                <Tradevalue />

                <NavbarThree />

                <MainBanner />

                <Stats />

                <AboutOurCompany />

                <EarningPlatform />

                <GetStrated />

                <KeyFeatures />

                <StartMiningCrypto />

                <StartTradingAndEarning />

                <WhyChooseUs />

                <Feedbacks />

                <MobileApp />

                <LatestNews />

                <NewsletterForm />
      
                <FooterTwo /> 
            </>
        );
    }
}

export default Index10;