import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="ml-services-area bg-f2f2f7 pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Our Services</span>
                        <h2>Our Professionals Services For You</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ml-service">
                                <div className="image">
                                    <img src="/images/machine-learning/ml-service1.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>IT Professionals</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ml-service">
                                <div className="image">
                                    <img src="/images/machine-learning/ml-service2.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Software Engineers</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ml-service">
                                <div className="image">
                                    <img src="/images/machine-learning/ml-service2.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Health &amp; Manufacturing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ml-service">
                                <div className="image">
                                    <img src="/images/machine-learning/ml-service3.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Security &amp; Surveillance</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                <a href="/service-details" className="read-more">
                                    Read More
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="ml-service">
                                <div className="image">
                                    <img src="/images/machine-learning/ml-service4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Automatic Optimization</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ml-service">
                                <div className="image">
                                    <img src="/images/machine-learning/ml-service5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Analysts</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;