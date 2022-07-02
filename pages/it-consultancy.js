import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import ITConsultancyContent from "../components/ServiceDetails/ITConsultancyContent";
import Footer from "../components/Layout/Footer";

class ITConsultancy extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="IT Consultancy"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="IT Consultancy"
        />

        <ITConsultancyContent />

        <Footer />
      </>
    );
  }
}

export default ITConsultancy;
