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
        <div className="cs-banner-section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="cs-banner-content">
                  <span className="sub-title">
                    PROFESSIONAL COMPANY WITH RELIABLE SERVICE
                  </span>
                  <h1>Cyber Security Expert</h1>
                  <p>Secure your Cyberspace, secure your Digital Life</p>

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
                <div className="cs-banner-image">
                  <img
                    src="/images/cyber-security-home/banner/main.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="cs-banner-shape">
            <img
              src="/images/cyber-security-home/banner/shape.png"
              alt="image"
            />
          </div>
          <div className="cs-lock">
            <img
              src="/images/cyber-security-home/banner/lock.png"
              alt="image"
            />
          </div>
        </div>
      </>
    );
  }
}
