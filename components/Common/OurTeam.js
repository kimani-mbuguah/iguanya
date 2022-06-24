import React, { Component } from 'react';
import Link from 'next/link';

class OurTeam extends Component {
    render() {
        return (
            <>
                <section className="team-area ptb-100 pb-70 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Meet Our Awesome Team Member</h2>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team1.jpg" alt="team" />
                                        
                                        <div className="social">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="content">
                                        <h3>John Smith</h3>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team2.jpg" alt="team" />
                                        
                                        <div className="social">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <h3>Lucy Eva</h3>
                                        <span>Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team3.jpg" alt="team" />

                                        <div className="social">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="content">
                                        <h3>Steven Smith</h3>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation shape image */}
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
            </>
        );
    }
}

export default OurTeam;