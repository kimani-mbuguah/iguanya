import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 25,
  autoplayHoverPause: true,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 2,
    },
    1550: {
      items: 2,
    },
  },
};

export default class Feedbacks extends Component {
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
        <div className="unique-feedback-area pt-100">
          <div className="container">
            <div className="section-title with-linear-gradient-text">
              <span className="sub-title">CREATING FEEDBACK</span>
              <h2>These People Have Already Invested In Our Cryptocurrency</h2>
            </div>

            {this.state.display ? (
              <OwlCarousel
                className="unique-feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="unique-single-feedback">
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    “We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.”
                  </p>
                  <div className="client-info">
                    <img
                      src="/images/cryptocurrency-home/user1.jpg"
                      alt="image"
                    />

                    <h3>Jason Roy</h3>
                    <span>Manager</span>
                  </div>
                  <div className="quote">
                    <img
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="unique-single-feedback">
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    “We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.”
                  </p>
                  <div className="client-info">
                    <img
                      src="/images/cryptocurrency-home/user2.jpg"
                      alt="image"
                    />

                    <h3>James Anderson</h3>
                    <span>Web Developer</span>
                  </div>
                  <div className="quote">
                    <img
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="unique-single-feedback">
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    “We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.”
                  </p>
                  <div className="client-info">
                    <img
                      src="/images/cryptocurrency-home/user3.jpg"
                      alt="image"
                    />

                    <h3>Jason Roy</h3>
                    <span>Manager</span>
                  </div>
                  <div className="quote">
                    <img
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="unique-single-feedback">
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    “We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.”
                  </p>
                  <div className="client-info">
                    <img
                      src="/images/cryptocurrency-home/user1.jpg"
                      alt="image"
                    />

                    <h3>James Anderson</h3>
                    <span>Web Developer</span>
                  </div>
                  <div className="quote">
                    <img
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="unique-single-feedback">
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    “We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.”
                  </p>
                  <div className="client-info">
                    <img
                      src="/images/cryptocurrency-home/user2.jpg"
                      alt="image"
                    />

                    <h3>Jason Roy</h3>
                    <span>Manager</span>
                  </div>
                  <div className="quote">
                    <img
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="unique-single-feedback">
                  <ul className="rating">
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                    <li>
                      <i className="bx bxs-star"></i>
                    </li>
                  </ul>
                  <p>
                    “We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication. No fake products and services.”
                  </p>
                  <div className="client-info">
                    <img
                      src="/images/cryptocurrency-home/user3.jpg"
                      alt="image"
                    />

                    <h3>James Anderson</h3>
                    <span>Web Developer</span>
                  </div>
                  <div className="quote">
                    <img
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                    />
                  </div>
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
