import React, { Component } from 'react';
import Link from 'next/link';

class WhatWeDo extends Component {
    render() {
        return (
            <section className="overview-area ptb-100 bg-f2f2f7">
                <div className="container">
                    <div className="overview-box it-overview">
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/it-service5.png" alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <h2>What We Do Taiker Template</h2>
                                <p>We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success.</p>

                                <ul className="features-list">
                                    <li>
                                        <span className="bg-white">
                                            <i className='bx bxs-badge-check'></i>
                                            Customer Service
                                        </span>
                                    </li>
                                    <li>
                                        <span className="bg-white">
                                            <i className='bx bxs-badge-check'></i>
                                            UI/UX Design
                                        </span>
                                    </li>
                                    <li>
                                        <span className="bg-white">
                                            <i className='bx bxs-badge-check'></i>
                                            Mobile App Development
                                        </span>
                                    </li>
                                    <li>
                                        <span className="bg-white">
                                            <i className='bx bxs-badge-check'></i>
                                            Web Development
                                        </span>
                                    </li>
                                    <li>
                                        <span className="bg-white">
                                            <i className='bx bxs-badge-check'></i>
                                            Distinctive Brand
                                        </span>
                                    </li>
                                    <li>
                                        <span className="bg-white">
                                            <i className='bx bxs-badge-check'></i>
                                            Adaptive Innovation
                                        </span>
                                    </li>
                                </ul>

                                <div className="rm-btn">
                                    <Link href="/contact">
                                        <a className="default-btn mr-4">
                                            Contact Us
                                            <span></span>
                                        </a>
                                    </Link>

                                    <Link href="/services">
                                        <a className="default-btn-two">
                                            Read More <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhatWeDo;