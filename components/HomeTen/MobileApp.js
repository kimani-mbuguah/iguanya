import React, { Component } from "react";

export default class MobileApp extends Component {
  render() {
    return (
      <>
        <div className="mobile-app-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="mobile-app-image">
                  <img
                    src="/images/cryptocurrency-home/mobile-app.png"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="mobile-app-content">
                  <h3>
                    Trade On The <span>Mobile App</span> Best App Features
                  </h3>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work hand-in-hand with industry-leading.
                  </p>

                  <div className="app-btn-box">
                    <a href="#" className="playstore-btn" target="_blank">
                      <img
                        src="/images/cryptocurrency-home/google-play.png"
                        alt="image"
                      />
                      Get It On
                      <span>Google Play</span>
                    </a>
                    <a href="#" className="applestore-btn" target="_blank">
                      <img
                        src="/images/cryptocurrency-home/app-store.png"
                        alt="image"
                      />
                      Download on the
                      <span>Apple Store</span>
                    </a>
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
