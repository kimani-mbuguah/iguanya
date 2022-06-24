import Link from "next/link";
import React, { Component } from "react";

export default class LatestNews extends Component {
  render() {
    return (
      <>
        <div className="blog-wrap-area pt-100 pb-70">
          <div className="container">
            <div className="section-title with-line-text-with-white-color">
              <span className="sub-title">LATEST NEWS</span>
              <h2>
                Explore, Learn And Stay <span>Up To Date</span> With The Latest
                News
              </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-card">
                  <div className="tag">
                    <span>LATEST NEWS</span>
                  </div>
                  <ul className="post-meta">
                    <li>
                      <i className="bx bxs-calendar"></i> 17th January
                    </li>
                    <li>
                      <i className="bx bx-message-dots"></i> 0 comment
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>The Launch Of A Revamped User Referral Program</a>
                    </Link>
                  </h3>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work.
                  </p>
                  <div className="info">
                    <img
                      src="/images/cryptocurrency-home/user1.jpg"
                      alt="image"
                    />
                    <h3>Thomas Adison</h3>
                    <span>Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-card">
                  <div className="tag">
                    <span>LATEST NEWS</span>
                  </div>
                  <ul className="post-meta">
                    <li>
                      <i className="bx bxs-calendar"></i> 17th January
                    </li>
                    <li>
                      <i className="bx bx-message-dots"></i> 0 comment
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Making Peace With The Feast Or Famine Of Freelancing
                      </a>
                    </Link>
                  </h3>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work.
                  </p>
                  <div className="info">
                    <img
                      src="/images/cryptocurrency-home/user2.jpg"
                      alt="image"
                    />
                    <h3>James Anderson</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-card">
                  <div className="tag">
                    <span>LATEST NEWS</span>
                  </div>
                  <ul className="post-meta">
                    <li>
                      <i className="bx bxs-calendar"></i> 17th January
                    </li>
                    <li>
                      <i className="bx bx-message-dots"></i> 0 comment
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Here Are The 5 Most Telling Signs Of Micromanagement
                      </a>
                    </Link>
                  </h3>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work.
                  </p>
                  <div className="info">
                    <img
                      src="/images/cryptocurrency-home/user3.jpg"
                      alt="image"
                    />
                    <h3>Sarah Taylor</h3>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
