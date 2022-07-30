import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import BlogCard from "../components/BlogTwo/BlogCard";
import BlogSideBar from "../components/Blog/BlogSideBar";
import Footer from "../components/Layout/Footer";

function Blog2({ posts, categories }) {
  return (
    <>
      <Navbar />
      <PageHeader
        pageTitle="Blog"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="Blog"
      />

      {/* Blog Area */}
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <BlogCard posts={posts} />
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar recent={posts.slice(0, 5)} categories={categories} />
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      <Footer />
    </>
  );
}

export async function getServerSideProps(pageContext) {
  const postQuery =
    encodeURIComponent(`*[_type == "post"] | order(_createdAt desc){
    _id, title, excerpt, body, mainImage, slug, publishedAt, "author": author->name
  }`);

  const url = `https://zs1hmjkw.api.sanity.io/v1/data/query/production?query=${postQuery}`;

  const result = await fetch(url).then((res) => res.json());
  const posts = result.result;

  const categoryQuery = encodeURIComponent(`*[_type == "category"]{title}`);

  const categoryUrl = `https://zs1hmjkw.api.sanity.io/v1/data/query/production?query=${categoryQuery}`;

  const categoryResult = await fetch(categoryUrl).then((res) => res.json());
  const categories = categoryResult.result;

  if (!posts) {
    return {
      props: { posts: [] },
    };
  } else {
    return {
      props: { posts: posts, categories: categories },
    };
  }
}

export default Blog2;
