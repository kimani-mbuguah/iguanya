import React, { Component } from "react";

export default class Overview extends Component {
  render() {
    return (
      <>
        <div className="bd-overview-area pt-100 pb-70">
          <div className="container">
            <div className="bd-overview-content">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="bd-overview-card">
                    <div className="overview-image">
                      <img
                        src="/images/big-data-home/overview/image-1.png"
                        alt="image"
                      />
                    </div>
                    <h3>Safe And Secure</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="bd-overview-card">
                    <div className="overview-image">
                      <img
                        src="/images/big-data-home/overview/image-2.png"
                        alt="image"
                      />
                    </div>
                    <h3>Operations Manage</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="bd-overview-card">
                    <div className="overview-image">
                      <img
                        src="/images/big-data-home/overview/image-3.png"
                        alt="image"
                      />
                    </div>
                    <h3>Experts Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="bd-overview-card">
                    <div className="overview-image">
                      <img
                        src="/images/big-data-home/overview/image-4.png"
                        alt="image"
                      />
                    </div>
                    <h3>Risk Management</h3>
                    <p>
                      Lorem ipsum dolor sit amet, is consectetur adipiscing
                      elit, sed do eiusmo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
