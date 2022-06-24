import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import BlogDetailsContent from '../components/BlogDetails/BlogDetailsContent';
import Footer from '../components/Layout/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader 
                    pageTitle="Blog Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Blog Details" 
                />
                <BlogDetailsContent />
                <Footer />
            </>
        );
    }
}

export default BlogDetails;