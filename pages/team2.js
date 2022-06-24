import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TeamCardTwo from '../components/Team/TeamCardTwo';
import Footer from '../components/Layout/Footer';

class Team2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Team Style Two"  
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Team Style Two" 
                />

                <TeamCardTwo />
                
                <Footer />
            </>
        );
    }
}

export default Team2;