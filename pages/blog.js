import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import BlogCard from "../components/BlogTwo/BlogCard";
import BlogSideBar from "../components/Blog/BlogSideBar";
import Footer from "../components/Layout/Footer";

function Blog({ posts, popularPosts, categories, tags, sanityConfig }) {
  const [mappedPosts, setMappedPosts] = useState([]);
  useEffect(() => {
    if (posts.length > 0) {
      const imgBuilder = imageUrlBuilder({
        projectId: sanityConfig.projectId,
        dataset: sanityConfig.dataset,
      });

      setMappedPosts(
        posts.map((p) => {
          const publishedAtObj = new Date(p.publishedAt);
          const momentObj = moment(publishedAtObj);

          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
            date: momentObj.format("MMMM Do YYYY, h:mm:ss a"),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  const filterByValue = (tag) => {
    const filteredPosts = mappedPosts.filter((post) => {
      for (let i = 0; i < post.tags.length; i++) {
        return post.tags[i] == tag;
      }
    });

    setMappedPosts(filteredPosts);
  };

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
              <BlogCard posts={mappedPosts} itemsPerPage={8} />
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar
                popularPosts={popularPosts}
                recent={posts.slice(0, 3)}
                categories={categories}
                sanityConfig={sanityConfig}
                tags={tags}
                filterByValue={filterByValue}
              />
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
        _id, 
        title, 
        excerpt, 
        body, 
        mainImage, 
        slug, 
        publishedAt, 
        "author": author->name,
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
      'popularPosts':*[_type == "post"] | order(_createdAt desc){
        _id, title, excerpt, body, mainImage, slug, publishedAt, "author": author->name,
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

  if (!blogPosts) {
    return {
      props: { posts: [] },
    };
  } else {
    return {
      props: {
        popularPosts: blogPosts.popularPosts
          .sort((a, b) => {
            return b.comments.length - a.comments.length;
          })
          .slice(0, 3),
        posts: blogPosts.posts,
        categories: blogPosts.categories,
        tags: blogPosts.tags,
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

export default Blog;
