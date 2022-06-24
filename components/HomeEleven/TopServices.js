import React, { Component } from "react";
import Link from "next/link";

export default class TopServices extends Component {
  render() {
    return (
      <>
        <div className="cs-card-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>
                    <Link href="/service-details">
                      <a>1. High Quality Services</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>
                    <Link href="/service-details">
                      <a>2. Effective Protection</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>
                    <Link href="/service-details">
                      <a>3. Provide Advanced Security</a>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cs-card-content">
                  <h3>
                    <Link href="/service-details">
                      <a>4. Complete Website Security</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
