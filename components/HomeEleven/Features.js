import React, { Component } from "react";
import Link from "next/link";

export default class Features extends Component {
  render() {
    return (
      <>
        <div className="cs-features-area">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 p-0">
                <div
                  className="cs-features-item"
                  style={{backgroundImage: `url(/images/cyber-security-home/features/features-1.jpg`}}
                >
                  <div className="content">
                    <h3>
                      <Link href="/contact">
                        <a>Application Security</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amLorem ipsum dolor sit amet is
                      consectetur adipiscing elit sed do.
                    </p>

                    <Link href="/contact">
                      <a className="get-started-btn">GET STARTED</a>
                    </Link>
                  </div>
                  <div className="bg-icon">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div
                  className="cs-features-item"
                  style={{backgroundImage: `url(/images/cyber-security-home/features/features-2.jpg`}}
                >
                  <div className="content">
                    <h3>
                      <Link href="/contact">
                        <a>Cloud Security</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amLorem ipsum dolor sit amet is
                      consectetur adipiscing elit sed do.
                    </p>

                    <Link href="/contact">
                      <a className="get-started-btn">GET STARTED</a>
                    </Link>
                  </div>
                  <div className="bg-icon">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 p-0">
                <div
                  className="cs-features-item"
                  style={{backgroundImage: `url(/images/cyber-security-home/features/features-3.jpg`}}
                >
                  <div className="content">
                    <h3>
                      <Link href="/contact">
                        <a>Infrastructure Security</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amLorem ipsum dolor sit amet is
                      consectetur adipiscing elit sed do.
                    </p>

                    <Link href="/contact">
                      <a className="get-started-btn">GET STARTED</a>
                    </Link>
                  </div>
                  <div className="bg-icon">
                    <i className="fa-solid fa-shield"></i>
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
