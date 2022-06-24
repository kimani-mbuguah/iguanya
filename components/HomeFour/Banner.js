import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <>
                <div className="main-banner">
                    <div className="container">
                        <div className="main-banner-content">
                            <span className="sub-title">Welcome to Taiker</span>
                            <h1>Creative & Strategic Digital Marketing Agency</h1>

                            <div className="btn-box">
                                <Link href="/contact">
                                    <a className="default-btn">
                                        Get Started <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="main-banner-image">
                            <img src="/images/banner-image/banner-image1.png" alt="image" />
                        </div>
                    </div>

                    {/* Animation shape Images */}
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
            </>
        );
    }
}

export default Banner;