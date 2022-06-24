import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectsFourGrid from '../components/Projects/ProjectsFourGrid';
import Footer from '../components/Layout/Footer';

class Projects2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Projects Style Two" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Projects Style Two" 
                />

                <ProjectsFourGrid />
                
                <Footer />
            </>
        );
    }
}

export default Projects2;