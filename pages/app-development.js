import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import MobileAppDevelopmentContent from "../components/ServiceDetails/MobileAppDevelopmentContent";
import Footer from "../components/Layout/Footer";

class ITConsultancy extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Mobile App Development"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Mobile App Development"
        />

        <MobileAppDevelopmentContent />

        <Footer />
      </>
    );
  }
}

export default ITConsultancy;
