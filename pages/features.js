import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import OurFeatures from '../components/Features/OurFeatures';
import OurFeaturesTab from '../components/Common/OurFeaturesTab';
import FunFacts from '../components/Common/FunFacts';
import PartnerWithTitle from '../components/Common/Partner/PartnerWithTitle';
import Footer from '../components/Layout/Footer';

class Features extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Features" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Features" 
                />

                <OurFeatures />

                <OurFeaturesTab />

                <FunFacts />

                <PartnerWithTitle />
                
                <Footer />
            </>
        );
    }
}

export default Features;