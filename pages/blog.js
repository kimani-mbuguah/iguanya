import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/Common/PageHeader";
import BlogCard from "../components/BlogTwo/BlogCard";
import BlogSideBar from "../components/Blog/BlogSideBar";
import Footer from "../components/Layout/Footer";

function Blog({ sanityConfig }) {
  const [mappedPosts, setMappedPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [recent, setRecent] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const client = sanityClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      token: sanityConfig.token,
      useCdn: false,
    });

    client
      .fetch(
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
      )
      .then((blogPosts) => {
        if (blogPosts) {
          setPopularPosts(
            blogPosts.popularPosts
              .sort((a, b) => {
                return b.comments.length - a.comments.length;
              })
              .slice(0, 3)
          );

          setCategories(blogPosts.categories);
          setTags(blogPosts.tags);
          setRecent(blogPosts.posts.slice(0, 3));

          if (blogPosts.posts.length > 0) {
            const imgBuilder = imageUrlBuilder({
              projectId: sanityConfig.projectId,
              dataset: sanityConfig.dataset,
            });

            setMappedPosts(
              blogPosts.posts.map((p) => {
                const publishedAtObj = new Date(p.publishedAt);
                const momentObj = moment(publishedAtObj);

                return {
                  ...p,
                  mainImage: imgBuilder
                    .image(p.mainImage)
                    .width(500)
                    .height(250),
                  date: momentObj.format("MMMM Do YYYY, h:mm:ss a"),
                };
              })
            );
          } else {
            setMappedPosts([]);
          }
        }
      });
  }, [sanityConfig]);

  const filterByValue = async (tag) => {
    const filteredItems = mappedPosts.filter((post) => {
      return post.tags.includes(tag) || post.categories.includes(tag);
    });
    setFilteredPosts(filteredItems);
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
          {mappedPosts.length > 0 ? (
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {filteredPosts.length > 0 ? (
                  <BlogCard posts={filteredPosts} itemsPerPage={6} />
                ) : (
                  <BlogCard posts={mappedPosts} itemsPerPage={6} />
                )}
              </div>

              <div className="col-lg-4 col-md-12">
                <BlogSideBar
                  popularPosts={popularPosts}
                  recent={recent}
                  categories={categories}
                  sanityConfig={sanityConfig}
                  tags={tags}
                  filterByValue={filterByValue}
                />
              </div>
            </div>
          ) : (
            ""
          )}
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

  return {
    props: {
      sanityConfig: {
        projectId: projectId,
        dataset: dataset,
        token: token,
        useCdn: false,
      },
    },
  };
}

export default Blog;
