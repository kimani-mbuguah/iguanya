import React, { Component } from 'react';
import Link from 'next/link';

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
                                                    <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
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
                                        <li>
                                            <Link href="/projects">
                                                <a>Projects</a>
                                            </Link>
                                        </li>
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
                                    <h3>Gallery</h3>
                                    <ul className="footer-instagram-post">
                                        <li>
                                            <img src="/images/gallery/android2b.png" alt="image" />
                                        </li>
                                        <li>
                                            <img src="/images/gallery/person2.png" alt="image" />
                                        </li>
                                        <li>
                                            <img src="/images/gallery/iphone23b.png" alt="image" />
                                        </li>
                                        <li>
                                            <img src="/images/gallery/e-vector-3-quotes.png" alt="image" />
                                        </li>
                                        <li>
                                            <img src="/images/gallery/iphone24c.png" alt="image" />
                                        </li>
                                        <li>
                                            <img src="/images/gallery/bag.png" alt="image" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright &copy;{currentYear} Iguanya. 
                                        All rights reserved <a href="https://iguanya.com/" target="_blank">Iguanya</a>
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