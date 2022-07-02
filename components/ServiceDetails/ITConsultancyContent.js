import React, { Component } from "react";

class ITConsultancyContent extends Component {
  render() {
    return (
      <>
        <section className="services-details-area ptb-100">
          <div className="container">
            <div className="services-details-overview">
              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Enterprise Architecture
                    Advisory
                  </h4>
                  <p>
                    Our Enterprise Architecture experts will assist you in
                    migrating from legacy, inefficient IT delivery systems to a
                    cloud-based infrastructure that simplifies delivery and and
                    allows for the integration of new technologies into your
                    software strategy.
                  </p>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/cloud.svg" alt="image" />
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-image wow fadeInUp">
                <img src="/images/firmware.svg" alt="image" />
              </div>

              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> IT Strategy and New Tech
                  </h4>
                  <p>
                    Your enterprise workflow and customers rely on the
                    consistent delivery of high-quality IT products and services
                    today. In addition, you must adopt new technologies to stay
                    competitive and satisfy modern users. Our IT consulting
                    solutions will assist you in achieving the proper balance
                    between these two objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Software Porfolio
                    Consulting
                  </h4>
                  <p>
                    Our IT consulting experts will examine your company's
                    enterprise software usage in order to identify any barriers
                    to success. They will then suggest approaches to improve
                    your enterprise software, develop new features, and connect
                    with third-party solutions to eliminate any barriers.
                  </p>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/superwoman.svg" alt="image" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ITConsultancyContent;
