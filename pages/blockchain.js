import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import MobileAppDevelopmentContent from "../components/ServiceDetails/MobileAppDevelopmentContent";
import BlockchainContent from "../components/ServiceDetails/BlockchainContent";
import Footer from "../components/Layout/Footer";

class Blockchain extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Blockchain Consultancy and Development"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Blockchain Consultancy and Development"
        />

        <BlockchainContent />

        <Footer />
      </>
    );
  }
}

export default Blockchain;
