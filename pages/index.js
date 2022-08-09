import React, { Component } from "react";
import sanityClient from "@sanity/client";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/HomeFive/Banner";
import OurServices from "../components/HomeFive/OurServices";
import SolutionTwo from "../components/Common/SolutionTwo";
import LatestWorks from "../components/HomeFive/LatestWorks";
import FunFacts from "../components/Common/FunFacts";
import TestimonialsTwo from "../components/Common/TestimonialsTwo";
import LetsGetToWork from "../components/Common/LetsGetToWork";
import PartnerWithTitleTwo from "../components/Common/Partner/PartnerWithTitleTwo";
import LatestNewsTwo from "../components/Common/LatestNewsTwo";
import SubscribeBoxedTwo from "../components/Common/SubscribeBoxedTwo";
import Footer from "../components/Layout/Footer";
import Tradevalue from "../components/HomeTen/TradeValue";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Tradevalue />
        <OurServices />
        <SolutionTwo />
        {/* <LatestWorks /> */}
        <FunFacts />
        <TestimonialsTwo />
        <LetsGetToWork />
        {/* <PartnerWithTitleTwo /> */}
        <LatestNewsTwo details={this.props} />
        <SubscribeBoxedTwo />
        <Footer />
      </>
    );
  }
}

export async function getServerSideProps(pageContext) {
  const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
  const dataset = process.env.REACT_APP_SANITY_PROJECT_DATASET;
  const token = process.env.REACT_APP_SANITY_TOKEN;

  const client = sanityClient({
    projectId: projectId,
    dataset: dataset,
    token: token,
    useCdn: false,
  });

  const blogPosts = await client.fetch(
    `{
      'posts':*[_type == "post"] | order(_createdAt desc){
        _id, title, excerpt, body, mainImage, slug, publishedAt, "author": author->name
      }
    }`
  );

  if (!blogPosts) {
    return {
      props: { posts: [] },
    };
  } else {
    return {
      props: {
        posts: blogPosts.posts.slice(0, 3),
        sanityConfig: {
          projectId: projectId,
          dataset: dataset,
          token: token,
          useCdn: false,
        },
      },
    };
  }
}

export default Index;
