import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <section className="choose-area-two ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="choose-content">
                                    <div className="section-title text-left">
                                        <span className="sub-title">Why Choose Us</span>
                                        <h2>Outstanding Digital Experience</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="choose-text">
                                        <i className='bx bx-badge-check'></i>
                                        <h4>Best Performence</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="choose-text">
                                        <i className='bx bx-badge-check'></i>
                                        <h4>Dedicated Team Member</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="choose-text">
                                        <i className='bx bx-badge-check'></i>
                                        <h4>24/7 Support!</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore et dolore magna aliqua.</p>
                                    </div>

                                    <div className="choose-btn">
                                        <a className="default-btn" href="/about">
                                            Discover More <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="why-choose-image">
                                    <img src="/images/why-choose-img1.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;