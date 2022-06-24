import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 7,
    },
    1600: {
      items: 8,
    },
  },
};

export default class Partners extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <>
        <div className="cs-partner-area pb-70">
          <div className="container-fluid">
            <div className="section-title with-line-text-with-white-color">
              <span className="sub-title">THE POWER OF TAIKER</span>
              <h2>
                Taiker Has Been Trusted <span>Over 2300 +</span> Companies In
                The World
              </h2>
            </div>

            {this.state.display ? (
              <OwlCarousel
                className="cs-partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-1.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-2.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-3.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-4.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-5.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-6.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-7.png"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="cs-partner-item">
                  <a href="#" target="_blank">
                    <img
                      src="/images/cyber-security-home/partner/partner-8.png"
                      alt="image"
                    />
                  </a>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}
