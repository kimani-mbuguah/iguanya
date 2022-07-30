import React, { useState, useEffect } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import ReactPaginate from "react-paginate";

import moment from "moment";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function BlogCard({ posts }) {
  const [mappedPosts, setMappedPosts] = useState([]);

  const [pageCount, setPageCount] = useState(1);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  useEffect(() => {
    if (posts.length > 0) {
      const imgBuilder = imageUrlBuilder({
        projectId: "zs1hmjkw",
        dataset: "production",
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
        //.slice(itemOffset, endOffset)
      );
      setPageCount(Math.ceil(items.length / itemsPerPage));
    } else {
      setMappedPosts([]);
    }
  }, [posts, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % mappedPosts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="row">
        {mappedPosts.length > 0
          ? mappedPosts.map((p, index) => (
              <div key={index} className="col-lg-6 col-md-6">
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
                        <a>
                          <h3>{p.title}</h3>
                        </a>
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

        {/* Pagination  */}

        {mappedPosts.length > 0 ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel={<i className="fas fa-angle-double-right"></i>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel={<i className="fas fa-angle-double-left"></i>}
            renderOnZeroPageCount={null}
            containerClassName="pagination-area"
            pageClassName="page-numbers"
            activeClassName="page-numbers current"
            previousClassName="prev page-numbers"
            nextClassName="next page-numbers"
          />
        ) : (
          ""
        )}
        {/* End Pagination  */}
      </div>
    </>
  );
}

export default BlogCard;
