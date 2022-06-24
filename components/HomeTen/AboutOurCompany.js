import React, { Component } from "react";
import Link from "next/link";

export default class AboutOurCompany extends Component {
  render() {
    return (
      <>
        <div className="crypto-about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="crypto-about-image">
                  <img
                    src="/images/cryptocurrency-home/about.png"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="crypto-about-content">
                  <span className="sub-title">ABOUT OUR COMPANY</span>
                  <h3>
                    Start <span>Mining Crypto</span> Currency Today With Us
                  </h3>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work hand-in-hand with industry-leading
                    brands to help redefine the possibilities and potential.
                  </p>
                  <ul className="list">
                    <li>
                      <i className="fa-solid fa-check"></i> Weekly Payouts To
                      Your Wallet
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Deposit And Withdraw
                      Anytime
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> No Lock-in Periods
                      Or Minimum Deposits
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Optional{" "}
                      <span>Nexus Mutual's Custody Cover</span>
                    </li>
                  </ul>
                  <div className="about-btn">
                    <Link href="/contact">
                      <a className="default-btn">
                        Get Started <span></span>
                      </a>
                    </Link>
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
