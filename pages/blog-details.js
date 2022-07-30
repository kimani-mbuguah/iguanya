import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import BlogDetailsContent from "../components/BlogDetails/BlogDetailsContent";
import Footer from "../components/Layout/Footer";

class BlogDetails extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageHeader
          pageTitle="Blog Details"
          breadcrumbTextOne="Home"
          breadcrumbUrl="/"
          breadcrumbTextTwo="Blog Details"
        />
        <BlogDetailsContent />
        <Footer />
      </>
    );
  }
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${pageSlug}"]`
  );
  const url = `https://zs1hmjkw.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];
  if (!post) {
    return {
      notFound: true,
    };
  } else {
    console.log(post);
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

export default BlogDetails;
