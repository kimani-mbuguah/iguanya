import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Services from '../components/ServicesThree/Services';
import Footer from '../components/Layout/Footer';

class Services3 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="SEO Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="SEO Services" 
                />
                
                <Services />
                
                <Footer />
            </>
        );
    }
}

export default Services3;