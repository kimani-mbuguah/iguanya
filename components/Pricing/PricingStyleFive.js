import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleThree extends Component {
    render() {
        return (
            <section className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Affordable Pricing Plans</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Weekly plan</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 120 <sub>/ Per week</sub>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        SEO & Branding
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Digital Marketing
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Google Analytics
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Branding Solutions
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Digital Accounts
                                    </li>
                                    <li>
                                        <i className='bx bxs-x-circle red'></i>
                                        Pay-per-Click
                                    </li>
                                    <li> 
                                        <i className='bx bxs-x-circle red'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Select the plan 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Month plan</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 840 <sub>/ Per month</sub>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        SEO & Branding
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Digital Marketing
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Google Analytics
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Branding Solutions
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Digital Accounts
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Pay-per-Click
                                    </li>
                                    <li> 
                                        <i className='bx bxs-x-circle red'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Select the plan 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Yearly plan</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 3,600 <sub> / Per yearly</sub>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        SEO & Branding
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Digital Marketing
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Google Analytics
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Branding Solutions
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Digital Accounts
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Pay-per-Click
                                    </li>
                                    <li> 
                                        <i className='bx bxs-badge-check'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Select the plan 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Image */}
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.svg" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default PricingStyleThree;