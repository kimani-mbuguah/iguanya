import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import WebDevelopmentContent from "../components/ServiceDetails/WebDevelopmentContent";
import Footer from "../components/Layout/Footer";

class WebDevelopment extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageHeader
          pageTitle="Web Development"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Web Development"
        />

        <WebDevelopmentContent />

        <Footer />
      </>
    );
  }
}

export default WebDevelopment;
