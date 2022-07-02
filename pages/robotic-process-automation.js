import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import RPAContent from "../components/ServiceDetails/RPAContent";
import Footer from "../components/Layout/Footer";

class RPA extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Robotic Process Automation"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Robotic Process Automation"
        />

        <RPAContent />

        <Footer />
      </>
    );
  }
}

export default RPA;
