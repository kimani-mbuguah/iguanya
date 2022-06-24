import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Banner extends Component {
    render() {
        return (
            <div className="banner-section">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="banner-content">
                                        <span className="sub-title">Creating. Results.</span>
                                        <h1>Creative solutions to improve your business!</h1>
                                        <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>

                                        <form>
                                            <input type="email" className="input-newsletter" placeholder="Enter your email address" name="email" />
                                            <button type="submit">Get Started</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="banner-image">
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/rocket.png" alt="image" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
                                            <img src="/images/rocket-shape.png" alt="image" />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Shape Images */}
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="cloud-shape">
                    <img src="/images/cloud-shape.png" alt="image" />
                </div>
                <div className="cloud-icon1">
                    <img src="/images/cloud1.png" alt="image" />
                </div>
                <div className="cloud-icon2">
                    <img src="/images/cloud2.png" alt="image" />
                </div>
                <div className="cloud-icon3">
                    <img src="/images/cloud3.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;