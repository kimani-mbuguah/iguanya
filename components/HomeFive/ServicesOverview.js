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
                <h2>Cloud Storage Service</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Cloud Database
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Hybrid Cloud
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Email Servers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Website Hosting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      File Storage
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Backup Systems
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services2">
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

          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src="/images/services/it-service4.png" alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>SEO Consultancy</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Content Marketing
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> SEO Optimization
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Social Marketing
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
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
