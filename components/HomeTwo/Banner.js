import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="hero-banner banner-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-content">
                                        <span className="sub-title">Welcome to Taiker</span>
                                        <h1>Creative & Strategic Digital Marketing Agency</h1>
                                        <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>

                                        <div className="btn-box">
                                            <Link href="/contact">
                                                <a className="default-btn">Get Started <span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-image">
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/main.png" alt="main" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/banner-shape1.png" alt="banner-shape1" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/banner-shape2.png" alt="carpet" />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                        <img src="/images/shape/shape1.png" alt="image" />
                    </ScrollAnimation>
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
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape-img8">
                    <img src="/images/shape/shape8.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;