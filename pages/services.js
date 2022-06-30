import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import ServicesOverview from "../components/HomeFive/ServicesOverview";
import Footer from "../components/Layout/Footer";

class Services2 extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Our Services"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Our Services"
        />

        <ServicesOverview />

        <Footer />
      </>
    );
  }
}

export default Services2;
