import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProductDetails from '../components/Shop/ProductDetails';
import Footer from '../components/Layout/Footer';

class SingleProduct extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageHeader 
                    pageTitle="Product Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Product Details" 
                />

                <ProductDetails />

                <Footer />
            </>
        );
    }
}

export default SingleProduct;