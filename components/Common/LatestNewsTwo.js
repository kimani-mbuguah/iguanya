import React, { useState, useEffect } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import Link from "next/link";

function LatestBlogPosts({ details }) {
  const [mappedPosts, setMappedPosts] = useState([]);
  useEffect(() => {
    if (details.posts.length > 0) {
      const imgBuilder = imageUrlBuilder({
        projectId: details.sanityConfig.projectId,
        dataset: details.sanityConfig.dataset,
      });

      setMappedPosts(
        details.posts.map((p) => {
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
  }, [details]);

  return (
    <>
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Latest Posts</h2>
            <p>
              Stay Updated With our latest blogs and articles. We share blogs on
              different topics including software development hacks and tips,
              tax and transfer pricing.
            </p>
          </div>

          <div className="row justify-content-center">
            {mappedPosts.length > 0
              ? mappedPosts.map((p, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="single-blog-post">
                      <div className="post-image">
                        <Link href={`/blog-details/${p.slug.current}`}>
                          <a>
                            <img src={p.mainImage} alt="image" />
                          </a>
                        </Link>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <ul>
                            <li>
                              By:
                              <Link href={`/blog-details/${p.slug.current}`}>
                                <a>{p.author}</a>
                              </Link>
                            </li>
                            <li>{p.date}</li>
                          </ul>
                        </div>
                        <h3>
                          <Link href={`/blog-details/${p.slug.current}`}>
                            <a>{p.title}</a>
                          </Link>
                        </h3>
                        <SanityBlockContent
                          projectId="zs1hmjkw"
                          dataset="production"
                          blocks={p.excerpt}
                        />

                        <Link href={`/blog-details/${p.slug.current}`}>
                          <a className="read-more-btn">
                            Read More <i className="flaticon-right-arrow"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>

        {/* Animation Shape Image */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.svg" alt="image" />
        </div>
      </section>
    </>
  );
}

export default LatestBlogPosts;
