import React, { Component } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
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

  const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
  const dataset = process.env.REACT_APP_SANITY_PROJECT_DATASET;
  const token = process.env.REACT_APP_SANITY_TOKEN;

  const client = sanityClient({
    projectId: projectId,
    dataset: dataset,
    token: token,
    useCdn: false,
  });

  const blogPost = await client.fetch(
    `{
      'posts':*[_type == "post"] | order(_createdAt desc){
        _id, title, excerpt, body, mainImage, slug, publishedAt, "author": author->name,
        'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
      }
      },
      'post':*[_type == "post" && slug.current == "${pageSlug}"]{
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
      },
      'categories':*[_type == "category"]{title}
    }`
  );

  if (!blogPost) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        _id: blogPost.post[0]._id,
        body: blogPost.post[0].body,
        title: blogPost.post[0].title,
        image: blogPost.post[0].mainImage,
        publishedAt: blogPost.post[0].publishedAt,
        author: blogPost.post[0].author,
        categories: blogPost.categories,
        recent: blogPost.posts.sort((a, b) => {
          return b.comments.length - a.comments.length;
        }),
        comments: blogPost.post[0].comments,
        sanityConfig: {
          projectId: projectId,
          dataset: dataset,
          token: token,
          useCdn: false,
        },
      },
    };
  }
};

export default BlogDetails;
