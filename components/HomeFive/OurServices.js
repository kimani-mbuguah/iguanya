import React, { Component } from "react";
import Link from "next/link";

class OurServices extends Component {
  render() {
    return (
      <section className="pt-100 pb-70 gray-bg">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We provide superior service to our clients, creating opportunities
              for people and delivering exceptional work.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-conversation"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/it-consultancy">
                    <a>IT Consultancy</a>
                  </Link>
                </h3>
                <p>
                  Remove the old technology in your IT environment and replace
                  it with the latest equipment and technology to better suit
                  your company.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-laptop"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/web-development">
                    <a>Web Development</a>
                  </Link>
                </h3>
                <p>
                  It’s not enough to have a nice website to compete. You must
                  have a website that separates you from the competition and
                  becomes your marketing machine.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bxs-megaphone"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/digital-marketing">
                    <a>Digital Marketing</a>
                  </Link>
                </h3>
                <p>
                  Bring your digital marketing campaigns to the next level with
                  data-driven results for social media marketing, SEO and more
                  from the experts at iguanya.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-mobile-alt"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/app-development">
                    <a>Mobile App Development</a>
                  </Link>
                </h3>
                <p>
                  We offer impactful mobile app development services to bring
                  your project to market on every device and platform. Talk to
                  our mobile app experts today!
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-cart"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/blockchain">
                    <a>Blockchain Consulting and Development</a>
                  </Link>
                </h3>
                <p>
                  Solutions for businesses to approach commerce, trading, supply
                  chain and identity management through transparency and
                  security, powered by blockchain and smart contracts.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-list-check"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/robotic-process-automation">
                    <a>Robotic Process Automation</a>
                  </Link>
                </h3>
                <p>
                  We support you in identifying processes for robotization and
                  developing effective automation solutions. We perform business
                  analyzes, prepare documentation and present recommendations
                  for further activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurServices;
