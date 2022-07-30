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

          {/* Categories */}
          <div className="widget widget_categories">
            <h3 className="widget-title">Categories</h3>

            <ul>
              {this.props.categories.length > 0
                ? this.props.categories.map((category, index) => (
                    <li key={index}>
                      <Link href="/blog">
                        <a>{category.title}</a>
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
                  <a>May 2019</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>April 2019</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>June 2019</a>
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
