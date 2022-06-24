import React, { Component } from "react";

export default class OurFeatures extends Component {
  render() {
    return (
      <>
        <div className="bd-featured-area pt-100 pb-70">
          <div className="container">
            <div className="section-title with-line-text-with-white-color">
              <span className="sub-title">OUR FEATURED</span>
              <h2>
                The Power To Complete <span>Website</span> And Big Data
                Solutions
              </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/featured/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Supply Chain</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/featured/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>Predictive Maintenance</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/featured/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>IT Optimization</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="bd-featured-card text-center">
                  <div className="featured-image">
                    <img
                      src="/images/big-data-home/featured/image-4.png"
                      alt="image"
                    />
                  </div>
                  <h3>Critical Infrastructure</h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bd-featured-shape">
            <img src="/images/big-data-home/featured/shape.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}
