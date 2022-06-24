import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        930: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class CaseStudies extends Component {
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
            <div className="works-area ptb-100 gray-bg">
                <div className="container-fluid">
                    <div className="section-title">
                        <span className="sub-title">Projects</span>
                        <h2>Our Case Studies</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="work-slider owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="work-card">
                            <img src="/images/works/work1.jpg" alt="image" />
                            
                            <div className="content text-center">
                                <span>
                                    <Link href="/projects2">
                                        <a>SEO Optimization</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="/project-details">
                                        <a>Designing a better cinema experience</a>
                                    </Link>
                                </h3>
                                
                                <Link href="/project-details">
                                    <a className="work-btn">Case Study</a>
                                </Link>
                            </div>
                        </div>
                
                        <div className="work-card">
                            <img src="/images/works/work2.jpg" alt="image" />
                            
                            <div className="content text-center">
                                <span>
                                    <Link href="/projects2">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="/project-details">
                                        <a>Building design process within teams</a>
                                    </Link>
                                </h3>
                                    
                                <Link href="/project-details">
                                    <a className="work-btn">Case Study</a>
                                </Link>
                            </div>
                        </div>
                    
                        <div className="work-card">
                            <img src="/images/works/work3.jpg" alt="image" />
                            
                            <div className="content text-center">
                                <span>
                                    <Link href="/projects2">
                                        <a>Keyword Targeting</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="/project-details">
                                        <a>How intercom brings play eCommerce</a>
                                    </Link>
                                </h3>
                                    
                                <Link href="/project-details">
                                    <a className="work-btn">Case Study</a>
                                </Link>
                            </div>
                        </div>
            
                        <div className="work-card">
                            <img src="/images/works/work4.jpg" alt="image" />
                            
                            <div className="content text-center">
                                <span>
                                    <Link href="/projects2">
                                        <a>Email Marketing</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="/project-details">
                                        <a>How to start a project with Reactjs</a>
                                    </Link>
                                </h3>
                                    
                                <Link href="/project-details">
                                    <a className="work-btn">Case Study</a>
                                </Link>
                            </div>
                        </div>
                
                        <div className="work-card">
                            <img src="/images/works/work5.jpg" alt="image" />
                            
                            <div className="content text-center">
                                <span>
                                    <Link href="/projects2">
                                        <a>Marketing & Reporting</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="/project-details">
                                        <a>Examples of different types of sprints</a>
                                    </Link>
                                </h3>
                                    
                                <Link href="/project-details">
                                    <a className="work-btn">Case Study</a>
                                </Link>
                            </div>
                        </div>
                    
                        <div className="work-card">
                            <img src="/images/works/work6.jpg" alt="image" />
                            
                            <div className="content text-center">
                                <span>
                                    <Link href="/projects2">
                                        <a>Development</a>
                                    </Link>
                                </span>
                                <h3>
                                    <Link href="/project-details">
                                        <a>Redesigning the New York times app</a>
                                    </Link>
                                </h3>
                                    
                                <Link href="/project-details">
                                    <a className="work-btn">Case Study</a>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default CaseStudies;