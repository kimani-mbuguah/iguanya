import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: false,
  touchDrag: false,
  navText: [
    "<i className='flaticon-left-chevron'></i>",
    "<i className='flaticon-right-chevron'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1550: {
      items: 4,
    },
  },
};

class Testimonials extends Component {
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
        <div className="feedback-area ptb-100 bg-color">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">Testimonials</span>
              <h2>Some Lovely Feedback From Our Clients</h2>
            </div>
          </div>

          {this.state.display ? (
            <OwlCarousel
              className="feedback-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-feedback-item border">
                <p>
                  “I am really impressed by the quality of services I received.
                  You were right on schedule, charged reasonable prices, were
                  professional and courteous in dealings, and delivered items
                  well before time.”
                </p>
                <div className="client-info">
                  <h3>Sammy Mbugua</h3>
                </div>
              </div>

              <div className="single-feedback-item border">
                <p>
                  “We thank Iguanya for the wonderful job in helping us develop
                  our program. Everyone was professional, excellent and hard
                  working. Thanks to them, we were able to achieve our goal on
                  time, and we look forward to continue working with them in the
                  future.”
                </p>
                <div className="client-info">
                  <h3>Grace Kaaru</h3>
                </div>
              </div>
              <div className="single-feedback-item border">
                <p>
                  I wanted to take a moment to thank you for the services your
                  team has provided. Your team has been a pleasure to work with,
                  professional and timely. Job well done and I hope we can
                  continue to grow together.”
                </p>
                <div className="client-info">
                  <h3>Jimmy Oduor</h3>
                </div>
              </div>
              <div className="single-feedback-item border">
                <p>
                  “We would like to express our satisfaction on the cooperation
                  regarding the development of our web application. The
                  development team did a very professional job. We are satisfied
                  with the solution given to us and with the communication flow
                  through the project.”
                </p>
                <div className="client-info">
                  <h3>Francis Mwangi</h3>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Testimonials;
