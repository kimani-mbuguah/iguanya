import React, { Component } from "react";
import Link from "next/link";

class ServicesOverview extends Component {
  render() {
    return (
      <section className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box it-overview">
            <div className="overview-content">
              <div className="content">
                <h2>Digital Marketing</h2>
                <p>
                  Our goal is to help businesses increase leads and brand
                  recognition by improving their online presence.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Search Engine Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Social Media Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Pay Per Click Campaigns
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Content Writing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Reputation Management
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Conversion Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Video Production
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Youtube Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Data Scraping
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/digital-marketing">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img src="/images/services/it-service1.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div className="overview-image">
              <div className="image">
                <img src="/images/services/it-service2.png" alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>Web Design & Development</h2>
                <p>
                  We provide expert web application development and web design
                  services. We offer a variety of website design and development
                  services, from creating mobile web development solutions and
                  responsive website designs, to building custom e-commerce and
                  intranet experiences using the latest and proven web
                  technologies.{" "}
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Responsive Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      UI / UX Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Graphic Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      24/7 Support and Maintenance
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Laravel Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      React JS Web Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Angular JS Website Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Vue JS Website Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      HTML5 Website Development
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/web-development">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div className="overview-content">
              <div className="content">
                <h2>IT Consultancy</h2>
                <p>
                  Let our knowledgeable and technologically savvy experts help
                  you develop an IT strategy for digital and technological
                  innovation in your organisation that matches your business
                  objectives. Our IT consulting services will assist you in
                  automating and digitalising operations, optimising your
                  software portfolio, and using the latest technologies.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Enterprise Architecture Advisory
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      It Strategy Consulting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Software Porfolio COnsulting
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/it-consultancy">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img src="/images/services/it-service3.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div className="overview-image">
              <div className="image">
                <img src="/images/android.svg" alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>Mobile App Development</h2>
                <p>
                  Dive into the world of mobility with your unique ideas
                  transforming into incredible apps for your business
                  requirements. We can assist you amplify your business
                  productivity with phenomenal mobile app solutions
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Consulting and Strategy
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      UI/UX Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Engineering And delivery
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      QA and Optimization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Flutter Mobile Apps
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Native Mobile Apps
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      React Native Mobile Apps
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/app-development">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div className="overview-content">
              <div className="content">
                <h2>Blockchain Consultancy and Development</h2>
                <p>
                  Get powerful enterprise blockchain solutions for your
                  business. Push your company to new heights with native
                  transparency and trust.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Education
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Strategy
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Project Management
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Ethereum
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Binance Smart Chain
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Hyperledger
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Celo
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/blockchain">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img src="/images/bitcoin.svg" alt="image" />
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div className="overview-image">
              <div className="image">
                <img src="/images/android.svg" alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>Robotic Process Automation</h2>
                <p>
                  We will support you in identifying processes for robotization
                  and developing effective automation solutions. We will
                  carefully plan the automation processes and their sequence. We
                  perform business analyzes, prepare documentation and present
                  recommendations for further activities.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      UiPath
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Blue Prism
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Automation Anywhere
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Python
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/robotic-process-automation">
                    <a className="default-btn">
                      Read More <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesOverview;
