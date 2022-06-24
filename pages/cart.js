import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import CartTable from '../components/Cart/CartTable';
import Footer from '../components/Layout/Footer';

class Cart extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Cart" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Cart" 
                />

                <CartTable />
                
                <Footer />
            </>
        );
    }
}

export default Cart;