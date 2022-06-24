import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

class Thankyou extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Thank You" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Thank You" 
                />

                <div className="thank-you-area ptb-100">
                    <div className="container">
                        <h1>Thanks for shopping with us!</h1>
                        
                        <Link href="/">
                            <a className="default-btn">Return to Home</a>
                        </Link>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default Thankyou;