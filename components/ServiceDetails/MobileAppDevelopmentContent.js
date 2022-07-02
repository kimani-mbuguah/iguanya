import React, { Component } from "react";

class MobileAppDevelopmentContent extends Component {
  render() {
    return (
      <>
        <section className="services-details-area ptb-100">
          <div className="container">
            <div className="services-details-overview">
              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Consulting and Strategy
                  </h4>
                  <p>
                    Choose technology and innovation consulting and in-depth
                    market understanding to get a success-oriented mobile
                    strategy for your company.
                  </p>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/strategy.svg" alt="image" />
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-image wow fadeInUp">
                <img src="/images/uiux.svg" alt="image" />
              </div>

              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> UI/UX Design
                  </h4>
                  <p>
                    With our help, you are getting user-focused digital tools
                    and omnichannel experiences that fully meet your customers'
                    needs and your business goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Engineering and Delivery
                  </h4>
                  <p>
                    We apply iterative approach to build future-proof digital
                    products, quickly manage changing requirements and deliver
                    on time and on budget.
                  </p>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/delivery.svg" alt="image" />
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-image wow fadeInUp">
                <img src="/images/quality.svg" alt="image" />
              </div>

              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> QA and Optimization
                  </h4>
                  <p>
                    We integrate new products into your digital infrastructure,
                    provide quality assurance and use performance insights for
                    future optimization.
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
