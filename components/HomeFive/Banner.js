import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const options = {
  items: 1,
  loop: true,
  nav: true,
  animateOut: "fadeOut",
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

class Banner extends Component {
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

  // Open Popup Modal
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <div className="it-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container mt-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <h1>Make contact with the future.</h1>
                    <p>
                      We strive to help our clients reach their goals by
                      offering them the perfect combination of technology,
                      expertise, and customer service.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact">
                        <a className="default-btn mr-3">
                          Get Started <span></span>
                        </a>
                      </Link>

                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i className="flaticon-play-button"></i> Play Video
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  {this.state.display ? (
                    <OwlCarousel
                      className="it-banner-image owl-carousel owl-theme"
                      {...options}
                    >
                      <div className="animate-image">
                        <img
                          src="/images/banner-image/markus-spiske.jpg"
                          alt="Web development"
                        />
                      </div>
                      <div className="animate-image">
                        <img
                          src="/images/banner-image/nathan-dumlao.jpg"
                          alt="IT consultancy"
                        />
                      </div>
                      <div className="animate-image">
                        <img
                          src="/images/banner-image/sarah-dorweiler.jpg"
                          alt="Android development"
                        />
                      </div>
                      <div className="animate-image">
                        <img
                          src="/images/banner-image/art-rachen.jpg"
                          alt="IT solutions"
                        />
                      </div>
                      <div className="animate-image">
                        <img
                          src="/images/banner-image/thisisengineering.jpg"
                          alt="Ecommerce development"
                        />
                      </div>
                      <div className="animate-image">
                        <img
                          src="/images/banner-image/walling.jpg"
                          alt="Digital marketing"
                        />
                      </div>
                      <div className="animate-image">
                        <img src="/images/banner-image/axville.jpg" alt="Tax" />
                      </div>
                    </OwlCarousel>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="X2uCZ8qXJKw"
          onClose={() => this.setState({ isOpen: false })}
        />

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
        <div className="shape-img11">
          <img src="/images/shape/shape11.png" alt="image" />
        </div>
        <div className="shape-img12">
          <img src="/images/shape/shape12.png" alt="image" />
        </div>
      </div>
    );
  }
}

export default Banner;
