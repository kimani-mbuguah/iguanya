import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class AboutArea extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <section className="about-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about-img2.jpg"
                  alt="image"
                  className="rounded-10"
                />

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

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <span className="sub-title">About Us</span>
                <h2>Who We Are</h2>
                <p>
                  We are technology pioneers, having deep knowledge of how to
                  conceptualize custom software development ideas and deliver
                  the expected end-product. We use emerging technologies like
                  Web 3.0, blockchain, and cloud, helping companies to launch
                  next-generation applications and solutions that are more open,
                  efficient and secure.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Web Design and
                      Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Digital Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> IT Consultancy
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Mobile Apps Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Blockchain
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Robotic Process
                      Automation
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-inner-area">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="about-text">
                    <h3>Work with business-oriented people</h3>
                    <p>
                      We build relations focused on delivering business value.
                      Our goal is to find meaningful solutions.{" "}
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="about-text">
                    <h3>Go-live with your product in less than three months</h3>
                    <p>
                      We focus on software development. Our concern is to
                      deliver your high-quality product to the market as soon as
                      possible but still, it must be valuable for your
                      customers.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="about-text">
                    <h3>Find partners, not services providers</h3>
                    <p>
                      Real innovations and a positive customer experience are
                      the heart of successful communication.
                    </p>
                  </div>
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
      </section>
    );
  }
}

export default AboutArea;
