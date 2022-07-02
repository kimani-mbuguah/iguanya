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
                    <i className="flaticon-tick"></i> Comprehensive RPA
                    implementation Advisory
                  </h4>
                  <p>
                    Our experienced experts will guide you step by step through
                    the entire RPA implementation process, which includes full
                    robotization or its individual stages. We will help you
                    freely automate processes and tasks in your organization,
                    regardless of the nature of your business activity.
                  </p>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/firmware.svg" alt="image" />
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-image wow fadeInUp">
                <img src="/images/robot.svg" alt="image" />
              </div>

              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Building the RPA Center of
                    Excellence
                  </h4>
                  <p>
                    We support companies in building an RPA Center of
                    Excellence, thanks to which RPA will become an integral part
                    of your organization. Solutions prepared by our experts are
                    always tailored to the individual needs of a given business.
                  </p>
                </div>
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Dedicated teams and
                    maintenance
                  </h4>
                  <p>
                    We have the right tools to monitor, control and improve your
                    robots. We will supervise both the development of robots and
                    all the environments in which they function. You can count
                    on the support of our engineers, using one of the supported
                    technologies: Automation Anywhere, Blue Prism, UiPath.
                  </p>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/team.svg" alt="image" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ITConsultancyContent;
