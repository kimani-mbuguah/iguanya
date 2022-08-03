import React, { Component } from "react";
import Link from "next/link";

class BlogSideBar extends Component {
  render() {
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
            {this.props.popularPosts.length > 0
              ? this.props.popularPosts.map((post, index) => (
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
              {this.props.categories.length > 0
                ? this.props.categories.map((category, index) => (
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
              {this.props.popularPosts.length > 0
                ? this.props.popularPosts.map((post, index) => (
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
              {this.props.recent.length > 0
                ? this.props.recent.map((post, index) => (
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
                  <a>August 2022</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>July 2022</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>June 2022</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div className="widget widget_tag_cloud">
            <h3 className="widget-title">Tags</h3>

            <div className="tagcloud">
              <Link href="/blog">
                <a>
                  IT <span className="tag-link-count"> (3)</span>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  Taiker <span className="tag-link-count"> (3)</span>
                </a>
              </Link>
              <Link href="/blog#">
                <a>
                  Games <span className="tag-link-count"> (2)</span>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  Fashion <span className="tag-link-count"> (2)</span>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  Travel <span className="tag-link-count"> (1)</span>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  Smart <span className="tag-link-count"> (1)</span>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  Marketing <span className="tag-link-count"> (1)</span>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  Tips <span className="tag-link-count"> (2)</span>
                </a>
              </Link>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

export default BlogSideBar;
