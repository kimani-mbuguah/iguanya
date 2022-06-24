import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Banner extends Component {
    render() {
        return (
            <div className="hero-banner banner-bg2">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-main-banner-content">
                                        <span className="sub-title">Your brand, promoted</span>
                                        <h1>Creative solutions to improve your business!</h1>
                                        <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>

                                        <form>
                                            <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" />
                                            <button type="submit">Get Started</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-main-banner-image">
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/man.png" alt="man" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/code.png" alt="code" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/carpet.png" alt="carpet" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/bin.png" alt="bin" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="bounceIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/book.png" alt="book" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/desktop.png" alt="desktop" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/dot.png" alt="dot" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/flower-top-big.png" alt="flower-top-big" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="rotateIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/flower-top.png" alt="flower-top" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/keyboard.png" alt="keyboard" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/pen.png" alt="pen" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/table.png" alt="table" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/tea-cup.png" alt="tea-cup" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="rollIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/headphone.png" alt="headphone" />
                                        </ScrollAnimation>
                                        
                                        {/* Main Images */} 
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/main-pic.png" alt="main-pic" />
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