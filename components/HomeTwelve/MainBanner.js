import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

export default class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        {/* If you want change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />

        <div className="bd-banner-section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="bd-banner-content">
                  <span className="sub-title">
                    PROFESSIONAL COMPANY WITH RELIABLE SERVICES
                  </span>
                  <h1>
                    Customer Ai & <span>Big Data</span> Solution For Analytics
                  </h1>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work hand-in-hand.
                  </p>

                  <ul className="banner-btn">
                    <li>
                      <Link href="/contact">
                        <a className="default-btn">
                          Get Started <span></span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.openModal();
                        }}
                        className="video-btn"
                      >
                        <i className="flaticon-play-button"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="bd-banner-image">
                  <img
                    src="/images/big-data-home/banner/main.png"
                    alt="image"
                  />
                  <div className="circle-shape"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bd-banner-shape-1">
            <img src="/images/big-data-home/banner/shape-1.png" alt="image" />
          </div>
          <div className="bd-banner-shape-2">
            <img src="/images/big-data-home/banner/shape-2.png" alt="image" />
          </div>
          <div className="bd-banner-shape-3">
            <img src="/images/big-data-home/banner/shape-3.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}
