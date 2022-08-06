import React, { useState, useEffect } from "react";
import Link from "next/link";
import SanityBlockContent from "@sanity/block-content-to-react";
import ReactPaginate from "react-paginate";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function BlogCard({ posts, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (posts.length) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(posts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(posts.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, posts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="row">
        {currentItems.length > 0
          ? currentItems.map((p, index) => (
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

        {posts.length > 1 ? (
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
