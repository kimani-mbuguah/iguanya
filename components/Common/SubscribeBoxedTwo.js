import React, { Component } from "react";

class SubscribeBoxedTwo extends Component {
  render() {
    return (
      <>
        <section className="subscribe-area pb-100">
          <div className="container">
            <div className="subscribe-inner-area jarallax">
              <div className="subscribe-content">
                <span className="sub-title">Stay Up To Date!</span>
                <h2>
                  Sign up to our newsletter to be the first to find out the
                  latest news and tips.
                </h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SubscribeBoxedTwo;
