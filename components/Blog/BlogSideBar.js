import React, { useState, useEffect } from "react";
import Link from "next/link";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";

function BlogSideBar({
  popularPosts,
  recent,
  categories,
  sanityConfig,
  tags,
  filterByValue,
}) {
  const [mappedPosts, setMappedPosts] = useState([]);
  const [month, setMonth] = useState("");
  const [lastMonth, setLastMoth] = useState("");
  const [lastMonthButOne, setLastMonthButOne] = useState("");

  useEffect(() => {
    if (popularPosts.length > 0) {
      const client = sanityClient(sanityConfig);
      const builder = imageUrlBuilder(client);
      setMappedPosts(
        popularPosts.map((p) => {
          return {
            ...p,
            mainImage: builder.image(p.mainImage),
          };
        })
      );

      const date = new Date();
      const momentObj = moment(date);
      const lastMonthMomentObj = moment(date.setMonth(date.getMonth() - 1));
      const lastMonthButOneMomentObj = moment(
        date.setMonth(date.getMonth() - 1)
      );

      setMonth(momentObj.format("MMMM YYYY"));
      setLastMoth(lastMonthMomentObj.format("MMMM YYYY"));
      setLastMonthButOne(lastMonthButOneMomentObj.format("MMMM YYYY"));
    } else {
      setMappedPosts([]);
    }
  }, [popularPosts]);

  return (
    <>
      <aside className="widget-area" id="secondary">
        {/* Search */}
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Popular Posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>
          {mappedPosts.length > 0
            ? mappedPosts.map((post, index) => (
                <article className="item" key={index}>
                  <Link href={`/blog-details/${post.slug.current}`}>
                    <a className="thumb">
                      <img
                        src={post.mainImage}
                        className="fullimage cover bg2"
                        role="img"
                      ></img>
                    </a>
                  </Link>

                  <div className="info">
                    <time>{post.date}</time>
                    <h4 className="title usmall">
                      <Link href={`/blog-details/${post.slug.current}`}>
                        <a>{post.title}</a>
                      </Link>
                    </h4>
                  </div>

                  <div className="clear"></div>
                </article>
              ))
            : ""}
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            {categories.length > 0
              ? categories.map((category, index) => (
                  <li key={index}>
                    <Link href="#">
                      <a>{category.title}</a>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>

        {/* Recent Comments */}
        <div className="widget widget_recent_comments">
          <h3 className="widget-title">Recent Comments</h3>

          <ul>
            {popularPosts.length > 0
              ? popularPosts.map((post, index) => (
                  <li key={index}>
                    <span className="comment-author-link">
                      <Link href={`/blog-details/${post.slug.current}`}>
                        <a>{post.comments[0].name}</a>
                      </Link>
                    </span>
                    <span className="plr-5">on</span>
                    <Link href={`/blog-details/${post.slug.current}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent Posts</h3>

          <ul>
            {recent.length > 0
              ? recent.map((post, index) => (
                  <li key={index}>
                    <Link href={`/blog-details/${post.slug.current}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>

        {/* Archives */}
        <div className="widget widget_archive">
          <h3 className="widget-title">Archives</h3>

          <ul>
            <li>
              <Link href="#">
                <a>{month}</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>{lastMonth}</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>{lastMonthButOne}</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            {tags.length > 0
              ? tags.map((tag, index) => (
                  <a
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => filterByValue(tag.tag)}
                  >
                    {tag.tag}{" "}
                    <span className="tag-link-count">
                      {" "}
                      ({tag.totalReferences})
                    </span>
                  </a>
                ))
              : ""}
          </div>
        </div>
      </aside>
    </>
  );
}

export default BlogSideBar;
