import React, { Component } from 'react';
import Link from 'next/link';

class RecentStory extends Component {
    render() {
        return (
            <>
                <section className="blog-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Recent Story</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog-image/blog-image10.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="/blog">
                                                        <a>Sarah Taylor</a>
                                                    </Link>
                                                </li>
                                                <li>June 24, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>How To Boost Your Digital Marketing Agency</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog-image/blog-image11.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>By: 
                                                    <Link href="/blog">
                                                        <a>James Anderson</a>
                                                    </Link>
                                                </li>
                                                <li>June 26, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Rise Of Smarketing And Why You Need It</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog-image/blog-image12.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="/blog">
                                                        <a>Steven Smith</a>
                                                    </Link>
                                                </li>
                                                <li>June 25, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>How To Use Music To Boost Your Business</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
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
                </section>
            </>
        );
    }
}

export default RecentStory;