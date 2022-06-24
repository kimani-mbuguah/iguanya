import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    }
}

class Projects extends Component {
    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <>
                <section className="projects-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Projects</span>
                            <h2>Proud Projects That Make Us Stand Out</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="container">
                        {this.state.display ? <OwlCarousel 
                            className="projects-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-projects-box">
                                <img src="/images/projects-image/project1.jpg" alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <span className="category">Design</span>
                                </div>
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects-box">
                                <img src="/images/projects-image/project2.jpg" alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Design & Development</a>
                                        </Link>
                                    </h3>
                                    <span className="category">Planing</span>
                                </div>
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects-box">
                                <img src="/images/projects-image/project3.jpg" alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Strategic Planing</a>
                                        </Link>
                                    </h3>
                                    <span className="category">Marketing</span>
                                </div>
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects-box">
                                <img src="/images/projects-image/project4.jpg" alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>SEO Consultancy</a>
                                        </Link>
                                    </h3>
                                    <span className="category">Development</span>
                                </div>
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects-box">
                                <img src="/images/projects-image/project5.jpg" alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Competitor Analysis</a>
                                        </Link>
                                    </h3>
                                    <span className="category">Design</span>
                                </div>
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects-box">
                                <img src="/images/projects-image/project6.jpg" alt="image" />
                                <div className="projects-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Social Media Marketing</a>
                                        </Link>
                                    </h3>
                                    <span className="category">Development</span>
                                </div>
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </>
        );
    }
}

export default Projects;