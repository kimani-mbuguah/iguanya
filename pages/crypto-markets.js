import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";

import WhyChooseUs from "../components/About/WhyChooseUs";
import Solution from "../components/Common/Solution";
import Testimonials from "../components/Common/Testimonials";
import OurTeam from "../components/Common/OurTeam";
import SubscribeFluid from "../components/Common/SubscribeFluid";
import PartnerWithTitle from "../components/Common/Partner/PartnerWithTitle";
import Footer from "../components/Layout/Footer";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageHeader
          pageTitle="Crypto Currencies Market"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Cryto Currencies"
        />
        <WhyChooseUs />
        <Solution />
        <Testimonials />
        <OurTeam />
        <SubscribeFluid />
        <PartnerWithTitle />
        <Footer />
      </>
    );
  }
}

export default About;
