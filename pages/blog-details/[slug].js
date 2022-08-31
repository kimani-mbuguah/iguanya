import React, { Component } from "react";
import sanityClient from "@sanity/client";
import Head from "next/head";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import BlogDetailsContent from "../../components/BlogDetails/BlogDetailsContent";
import Footer from "../../components/Layout/Footer";

class BlogDetails extends Component {
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
          <title>Iguanya - Make it happen</title>
        </Head>
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
        'author': author->name,
        'categories': categories[]->title,
        'tags': tags[]->tag,
        'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      },
      'categories':*[_type == "category"]{title},
      'tags':*[_type == "tag"]{
        tag,
        'totalReferences': count(*[_type in ['post'] && references(^._id)])
    }
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
        tags: blogPost.tags,
        slug: pageSlug,
        recent: blogPost.posts
          .sort((a, b) => {
            return b.comments.length - a.comments.length;
          })
          .slice(0, 3),
        comments: blogPost.post[0].comments,
        postCategories: blogPost.post[0].categories,
        postTags: blogPost.post[0].tags,
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
