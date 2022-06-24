import React, { Component } from "react";
import Link from "next/link";

export default class Services extends Component {
  render() {
    return (
      <>
        <div className="cs-services-area pb-70">
          <div className="container">
            <div className="section-title with-line-text">
              <span className="sub-title">OUR SERVICES</span>
              <h2>
                The Power To Protect Your <span>Cyberspace</span> & Complete
                Website Security
              </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Easy To Transact</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Secure Managed IT</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Data Protection</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-4.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Incident Responder</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-5.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Data Encryption</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-6.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Disaster Planning</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-7.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Threat Hunter</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="cs-services-card text-center">
                  <div className="image">
                    <img
                      src="/images/cyber-security-home/services/services-8.png"
                      alt="image"
                    />
                  </div>
                  <h3>
                    <Link href="/service-details">
                      <a>Data Recovery</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                    sed do eiusmo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
