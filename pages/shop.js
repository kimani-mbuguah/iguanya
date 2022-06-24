import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ShopProducts from '../components/Shop/ShopProducts';
import Footer from '../components/Layout/Footer';

class Shop extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Shop" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Shop" 
                />

                <ShopProducts />
                
                <Footer />
            </>
        );
    }
}

export default Shop;