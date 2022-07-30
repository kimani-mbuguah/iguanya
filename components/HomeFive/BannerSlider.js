import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import VisibilitySensor from "react-visibility-sensor";

const OwlCarousel = dynamic(import("react-owl-carousel3"));
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const options = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  margin: 0,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: false,
  touchDrag: false,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

class BannerSlider extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  // Open Popup Modal
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

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

        {this.state.display ? (
          <OwlCarousel
            className="machine-learning-slider owl-carousel owl-theme"
            {...options}
          >
            <div className="machine-learning-banner ml-bg1 jarallax">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container mt-80">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="banner-content">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }
                              >
                                Make contact with the future.
                              </h1>

                              <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }
                              >
                                We strive to help our clients reach their goals
                                by offering them the perfect combination of
                                technology, expertise, and customer service.{" "}
                              </p>

                              <div
                                className={`banner-btn ${
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }`}
                              >
                                <Link href="/contact">
                                  <a className="default-btn mr-4">
                                    Get Started <span></span>
                                  </a>
                                </Link>

                                <Link href="/index8">
                                  <a className="default-btn-two">
                                    Try It Free <span></span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>

                      <div className="col-lg-5">
                        <div className="ml-video">
                          <div className="solution-video">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                this.openModal();
                              }}
                              className="video-btn popup-youtube"
                            >
                              <i className="flaticon-play-button"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shape Images */}
              <div className="shape-img2">
                <img src="/images/shape/shape2.svg" alt="image" />
              </div>
              <div className="shape-img3">
                <img src="/images/shape/shape3.svg" alt="image" />
              </div>
              <div className="shape-img4">
                <img src="/images/shape/shape4.png" alt="image" />
              </div>
              <div className="shape-img5">
                <img src="/images/shape/shape5.png" alt="image" />
              </div>
              <div className="shape-img6">
                <img src="/images/shape/shape6.png" alt="image" />
              </div>
              <div className="shape-img7">
                <img src="/images/shape/shape7.png" alt="image" />
              </div>
              <div className="shape-img8">
                <img src="/images/shape/shape8.png" alt="image" />
              </div>
              <div className="shape-img9">
                <img src="/images/shape/shape9.png" alt="image" />
              </div>
              <div className="shape-img10">
                <img src="/images/shape/shape10.png" alt="image" />
              </div>
            </div>

            <div className="machine-learning-banner ml-bg2 jarallax">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container mt-80">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="banner-content">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }
                              >
                                Machine Learning Models For Business Process
                              </h1>
                              <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }
                              >
                                ML today are able to supply needful of help,
                                information, and positive experience of
                                maintaining intimacy with customers. Eventually,
                                chatbot ideas bring a pleasant experience of all
                                these qualities into the conversation.
                              </p>

                              <div
                                className={`banner-btn ${
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }`}
                              >
                                <Link href="/contact">
                                  <a className="default-btn mr-4">
                                    Get Started <span></span>
                                  </a>
                                </Link>

                                <Link href="/index8">
                                  <a className="default-btn-two">
                                    Try It Free <span></span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>

                      <div className="col-lg-5">
                        <div className="ml-video">
                          <div className="solution-video">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                this.openModal();
                              }}
                              className="video-btn popup-youtube"
                            >
                              <i className="flaticon-play-button"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shape Images */}
              <div className="shape-img2">
                <img src="/images/shape/shape2.svg" alt="image" />
              </div>
              <div className="shape-img3">
                <img src="/images/shape/shape3.svg" alt="image" />
              </div>
              <div className="shape-img4">
                <img src="/images/shape/shape4.png" alt="image" />
              </div>
              <div className="shape-img5">
                <img src="/images/shape/shape5.png" alt="image" />
              </div>
              <div className="shape-img6">
                <img src="/images/shape/shape6.png" alt="image" />
              </div>
              <div className="shape-img7">
                <img src="/images/shape/shape7.png" alt="image" />
              </div>
              <div className="shape-img8">
                <img src="/images/shape/shape8.png" alt="image" />
              </div>
              <div className="shape-img9">
                <img src="/images/shape/shape9.png" alt="image" />
              </div>
              <div className="shape-img10">
                <img src="/images/shape/shape10.png" alt="image" />
              </div>
            </div>

            <div className="machine-learning-banner ml-bg3 jarallax">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container mt-80">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="banner-content">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }
                              >
                                Use Machine Learning To Augment Your Business
                                Process
                              </h1>
                              <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }
                              >
                                ML today are able to supply needful of help,
                                information, and positive experience of
                                maintaining intimacy with customers. Eventually,
                                chatbot ideas bring a pleasant experience of all
                                these qualities into the conversation.
                              </p>

                              <div
                                className={`banner-btn ${
                                  isVisible
                                    ? "animated fadeInUp opacityOne"
                                    : "opacityZero"
                                }`}
                              >
                                <Link href="/contact">
                                  <a className="default-btn mr-4">
                                    Get Started <span></span>
                                  </a>
                                </Link>

                                <Link href="/index8">
                                  <a className="default-btn-two">
                                    Try It Free <span></span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>

                      <div className="col-lg-5">
                        <div className="ml-video">
                          <div className="solution-video">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                this.openModal();
                              }}
                              className="video-btn popup-youtube"
                            >
                              <i className="flaticon-play-button"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shape Images */}
              <div className="shape-img2">
                <img src="/images/shape/shape2.svg" alt="image" />
              </div>
              <div className="shape-img3">
                <img src="/images/shape/shape3.svg" alt="image" />
              </div>
              <div className="shape-img4">
                <img src="/images/shape/shape4.png" alt="image" />
              </div>
              <div className="shape-img5">
                <img src="/images/shape/shape5.png" alt="image" />
              </div>
              <div className="shape-img6">
                <img src="/images/shape/shape6.png" alt="image" />
              </div>
              <div className="shape-img7">
                <img src="/images/shape/shape7.png" alt="image" />
              </div>
              <div className="shape-img8">
                <img src="/images/shape/shape8.png" alt="image" />
              </div>
              <div className="shape-img9">
                <img src="/images/shape/shape9.png" alt="image" />
              </div>
              <div className="shape-img10">
                <img src="/images/shape/shape10.png" alt="image" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default BannerSlider;
