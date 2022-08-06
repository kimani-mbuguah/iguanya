import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <section className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Contact Info</h3>

                  <ul className="footer-contact-info">
                    <li>
                      <i className="flaticon-phone-call"></i>
                      <span>Mon to Fri : 09:00AM - 06:00PM</span>

                      <a href="tel:1235421457852">+254 725 136 849</a>
                    </li>
                    <li>
                      <i className="flaticon-email"></i>
                      <span>Do You Have a Question?</span>
                      <a href="mailto:info@iguanya.com">info@iguanya.com</a>
                    </li>
                    <li>
                      <i className="flaticon-social-media"></i>
                      <span>Socials Network</span>

                      <ul className="social">
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget pl-5">
                  <h3>Quick Links</h3>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Our Services</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/projects">
                        <a>Projects</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Support</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget pl-5">
                  <h3>Services</h3>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/app-development">
                        <a>Mobile App Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/it-consultancy">
                        <a>IT Consultancy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/robotic-process-automation">
                        <a>Robotic Process Automation</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development">
                        <a>Web Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blockchain">
                        <a>Blockchain Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/digital-marketing">
                        <a>Digital Marketing</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="copyright-area">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6 col-md-6">
                  <p>
                    Copyright &copy;{currentYear} Iguanya. All rights reserved{" "}
                    <a href="https://iguanya.com/" target="_blank">
                      Iguanya
                    </a>
                  </p>
                </div>

                <div className="col-lg-6 col-sm-6 col-md-6">
                  <ul>
                    <li>
                      <Link href="/terms-and-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
