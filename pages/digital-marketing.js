import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import DigitalMarketingContent from "../components/ServiceDetails/DigitalMarketingContent";
import Footer from "../components/Layout/Footer";

class DigitalMarketing extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Digital Marketing"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Digital Marketing"
        />

        <DigitalMarketingContent />

        <Footer />
      </>
    );
  }
}

export default DigitalMarketing;
