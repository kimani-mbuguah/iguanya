import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Footer from '../components/Layout/Footer';
import BlogCard from '../components/Blog/BlogCard';

class Blog extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader 
                    pageTitle="Blog Grid" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Blog Grid" 
                />
                <BlogCard />
                <Footer />
            </>
        );
    }
}

export default Blog;