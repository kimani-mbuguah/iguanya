import React, { Component } from 'react'
import Link from 'next/link'

export default class FooterThree extends Component {
  render() {
    return (
      <>
        <div className="footer-wrap-area with-black-color pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-card">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/logo-white.png" alt="logo" />
                                </a>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do ipsum lorem dollar eiusmo. Lorem ipsum dolor sit amet, is sit consectetur adipiscing elit.</p>
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="https://www.twitter.com/" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-card ps-5">
                            <h3>Services Links</h3>

                            <ul className="footer-quick-links">
                                <li>
                                    <Link href="/service-details">
                                        <a>
                                            <i className="fa-solid fa-angles-right"></i> Threat Hunter
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-details">
                                        <a>
                                            <i className="fa-solid fa-angles-right"></i> Incident Responder
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-details">
                                        <a>
                                            <i className="fa-solid fa-angles-right"></i> Secure Managed IT
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-details">
                                        <a>
                                            <i className="fa-solid fa-angles-right"></i> Compliance
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-details">
                                        <a>
                                            <i className="fa-solid fa-angles-right"></i> Cyber Security
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-card ps-5">
                            <h3>Quick Links</h3>

                            <ul className="footer-quick-links">
                                <li>
                                    <Link href="/contact">
                                        <a><i className="fa-solid fa-angles-right"></i> Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a><i className="fa-solid fa-angles-right"></i> About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a><i className="fa-solid fa-angles-right"></i> Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a><i className="fa-solid fa-angles-right"></i> FAQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a><i className="fa-solid fa-angles-right"></i> Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-card">
                            <h3>Contact Info</h3>

                            <ul className="contact-links">
                                <li><span>Address:</span> 2750 Quadra Street Victoria Road, New York, Canada</li>
                                <li><span>Website:</span> <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a></li>
                                <li><span>Email:</span> <a href="mailto:admin@taiker.com">admin@taiker.com</a></li>
                                <li><span>Phone:</span> <a href="tel:1234567890">+123 456 7890</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-wrap-line">
                <img src="/images/cryptocurrency-home/footer/wrap-line.png" alt="image" />
            </div>
            <div className="footer-wrap-shape">
                <img src="/images/cyber-security-home/layer-shape.png" alt="image" />
            </div>
        </div>

        <div className="copyright-wrap-area with-black-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <p>Copyright @Taiker. All rights reserved <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                    </div>
    
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <ul className="list">
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
      </>
    )
  }
}
