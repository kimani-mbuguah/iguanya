import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import AboutArea from "../components/AboutTwo/AboutArea";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import Solution from "../components/Common/Solution";
import Testimonials from "../components/Common/Testimonials";
import OurTeamTwo from "../components/Common/OurTeamTwo";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import PartnerWithTitle from "../components/Common/Partner/PartnerWithTitle";
import Footer from "../components/Layout/Footer";

class About2 extends Component {
  render() {
    return (
      <>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-C4YXP6GNQJ"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4YXP6GNQJ', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="We strive to help our clients reach their goals by offering them the perfect combination of technology, expertise, and customer service."
          />
          <meta
            name="keywords"
            content="Web development, IT Consultancy, Digital Marketing, Mobile App Development, eCommerce Development, IT Solutions, Tax, Transfer Pricing"
          />
          <meta name="author" content="Kimani Mbugua" />
          <title>About Us - Make it happen</title>
        </Head>
        <Navbar />
        <PageHeader
          pageTitle="About Us"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="About Us"
        />
        <AboutArea />
        <FunFactsTwo />
        <WhyChooseUs />
        <Solution />
        <Testimonials />
        {/* <OurTeamTwo /> */}
        <SubscribeStyleThree />
        {/* <PartnerWithTitle /> */}
        <Footer />
      </>
    );
  }
}

export default About2;
