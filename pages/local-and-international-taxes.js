import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import RPAContent from "../components/ServiceDetails/RPAContent";
import TaxContent from "../components/ServiceDetails/TaxContent";
import Footer from "../components/Layout/Footer";

class RPA extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Local And Intenational Taxes"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Local And Intenational Taxes"
        />

        <TaxContent />

        <Footer />
      </>
    );
  }
}

export default RPA;
