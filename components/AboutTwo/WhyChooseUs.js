import React, { Component } from "react";
import Link from "next/link";

class WhyChooseUs extends Component {
  render() {
    return (
      <section className="choose-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div className="section-title text-left">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Engaging New Audiences Through Smart Approach</h2>

                  <p>
                    We deliver successful software products to customers around
                    the world. We have long-term partnerships with clients
                    across industries such as healthcare, education, fintech,
                    and transportation. Take advantage of our experience -
                    choose our services and get innovative solutions perfectly
                    tailored to your needs.
                  </p>

                  <p>
                    We work for the trust of our customers. We focus on sincere
                    communication and partnership, which makes it easier for us
                    to build long-term cooperation.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/contact">
                    <a className="default-btn">
                      Discover More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <img src="/images/machine-learning/about3.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
