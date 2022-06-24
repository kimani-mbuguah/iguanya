import React, { Component } from 'react';
import Link from 'next/link';

class PartnerWithTitle extends Component {
    render() {
        return (
            <>
                <section className="partner-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Partner</span>
                            <h2>We partner with companies of all sizes, all around the world</h2>
                        </div>

                        <div className="row align-items-center">
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img1.png" alt="image" />
                                    <img src="/images/partner-image/partner-img1.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img2.png" alt="image" />
                                    <img src="/images/partner-image/partner-img2.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img3.png" alt="image" />
                                    <img src="/images/partner-image/partner-img3.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img4.png" alt="image" />
                                    <img src="/images/partner-image/partner-img4.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img5.png" alt="image" />
                                    <img src="/images/partner-image/partner-img5.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img6.png" alt="image" />
                                    <img src="/images/partner-image/partner-img6.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img7.png" alt="image" />
                                    <img src="/images/partner-image/partner-img7.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img8.png" alt="image" />
                                    <img src="/images/partner-image/partner-img8.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img9.png" alt="image" />
                                    <img src="/images/partner-image/partner-img9.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="/partner" target="_blank">
                                    <img src="/images/partner-image/partner-img10.png" alt="image" />
                                    <img src="/images/partner-image/partner-img10.png" alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
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
                </section>
            </>
        );
    }
}

export default PartnerWithTitle;