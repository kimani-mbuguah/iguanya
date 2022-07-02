import React, { Component } from "react";

class MobileAppDevelopmentContent extends Component {
  render() {
    return (
      <>
        <section className="services-details-area ptb-100">
          <div className="container">
            <div className="services-details-overview">
              <div className="services-details-image wow fadeInUp">
                <img src="/images/crypto.svg" alt="image" />
              </div>

              <div className="services-details-desc">
                <div className="features-text">
                  <p>
                    Unite and bring together the stakeholders within your
                    organization on an equivalent level of understanding of
                    blockchain so as to acknowledge the opportunities and
                    advantages.
                  </p>
                  <p>
                    Exceptional and decentralized application development
                    assistance on blockchain platforms like Ethereum, Bitcoin,
                    Hyperledger, and Celo
                  </p>

                  <p>
                    Assessing and managing approach to blockchain, in reference
                    to tech assortment, enrollment and legal guidance.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MobileAppDevelopmentContent;
