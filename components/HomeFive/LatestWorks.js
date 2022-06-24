import React, { Component } from 'react';
import Link from 'next/link';

class LatestWorks extends Component {
    render() {
        return (
            <div className="works-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Latest Works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
 
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work1.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects">
                                            <a>Development</a>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work2.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects">
                                            <a>Web Design</a>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work3.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects">
                                            <a>eCommerce</a>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work4.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects">
                                            <a>React</a>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work5.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects">
                                            <a>Angular</a>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src="/images/works/work6.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects">
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
                        </div>
                    </div>

                    <div className="more-work">
                        <Link href="/projects2">
                            <a className="default-btn">
                                View More Project <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestWorks;