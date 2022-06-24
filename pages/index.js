import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HomeFive/Banner';
import OurServices from '../components/HomeFive/OurServices';
import ServicesOverview from '../components/HomeFive/ServicesOverview';
import SolutionTwo from '../components/Common/SolutionTwo';
import LatestWorks from '../components/HomeFive/LatestWorks';
import FunFacts from '../components/Common/FunFacts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import LetsGetToWork from '../components/Common/LetsGetToWork';
import PartnerWithTitleTwo from '../components/Common/Partner/PartnerWithTitleTwo';
import LatestNewsTwo from '../components/Common/LatestNewsTwo';
import SubscribeBoxedTwo from '../components/Common/SubscribeBoxedTwo';
import Footer from '../components/Layout/Footer';
 
class Index5 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <OurServices />
                <ServicesOverview />
                <SolutionTwo /> 
                <LatestWorks />
                <FunFacts />
                <TestimonialsTwo />
                <LetsGetToWork />
                <PartnerWithTitleTwo />
                <LatestNewsTwo />
                <SubscribeBoxedTwo/>
                <Footer/> 
            </>
        );
    }
}

export default Index5;