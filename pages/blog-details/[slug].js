import React, { Component } from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import BlogDetailsContent from "../../components/BlogDetails/BlogDetailsContent";
import Footer from "../../components/Layout/Footer";

class BlogDetails extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PageHeader
          pageTitle={this.props.title}
          breadcrumbTextOne="Blog"
          breadcrumbUrl="/blog"
          breadcrumbTextTwo="Blog Details"
        />
        <BlogDetailsContent details={this.props} />
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
    `*[_type == "post" && slug.current == "${pageSlug}"]{
      _id, 
      title, 
      excerpt, 
      body, 
      mainImage, 
      slug, 
      publishedAt, 
      "author": author->name,
      'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
        _id, 
        name, 
        email, 
        comment, 
        _createdAt
    }
    }`
  );
  const url = `https://zs1hmjkw.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  const categoryQuery = encodeURIComponent(`*[_type == "category"]{title}`);

  const categoryUrl = `https://zs1hmjkw.api.sanity.io/v1/data/query/production?query=${categoryQuery}`;

  const categoryResult = await fetch(categoryUrl).then((res) => res.json());
  const categories = categoryResult.result;

  const postsQuery = encodeURIComponent(
    `*[_type == "post"] | order(_createdAt desc){title,slug}`
  );

  const postsUrl = `https://zs1hmjkw.api.sanity.io/v1/data/query/production?query=${postsQuery}`;

  const postsResult = await fetch(postsUrl).then((res) => res.json());
  const posts = postsResult.result;

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        _id: post._id,
        body: post.body,
        title: post.title,
        image: post.mainImage,
        publishedAt: post.publishedAt,
        author: post.author,
        categories: categories,
        recent: posts,
        comments: post.comments,
      },
    };
  }
};

export default BlogDetails;
