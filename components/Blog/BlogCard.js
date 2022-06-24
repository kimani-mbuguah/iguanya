import React, { Component } from 'react';
import Link from 'next/link';

class BlogCard extends Component {
    render() {
        return (
            <>
                <div className="blog-area blog-ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/images/blog-image/blog-image1.jpg" alt="image" />
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
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image2.jpg" alt="image" />
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
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image3.jpg" alt="image" />
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
                                            <Link href="blog-details">
                                                <a>How To Use Music To Boost Your Business</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image4.jpg" alt="image" />
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
                                            <Link href="blog-details">
                                                <a>Creative solutions to improve your business!</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image5.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="/blog">
                                                        <a>James Anderson</a>
                                                    </Link>
                                                </li>
                                                <li>June 26, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>Finding the human in technology</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image6.jpg" alt="image" />
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
                                                <a>Ideas people want to spend time with</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image7.jpg" alt="image" />
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
                                                <a>Ideas people want to spend time with</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image8.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="/blog">
                                                        <a>James Anderson</a>
                                                    </Link>
                                                </li>
                                                <li>June 26, 2019</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>Ideas people want to spend time with</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

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
                                                <img src="/images/blog-image/blog-image9.jpg" alt="image" />
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
                                                <a>The best marketing doesn’t feel like marketing</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Pagination  */}
                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <Link href="#">
                                        <a className="prev page-numbers">
                                            <i className="fas fa-angle-double-left"></i>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="page-numbers">1</a>
                                    </Link>
                                    <span className="page-numbers current" aria-current="page">2</span>
                                    <Link href="#">
                                        <a  className="page-numbers">3</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="next page-numbers">
                                            <i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* End Pagination  */}
                        </div>
                   </div>
                </div>
            </>
        );
    }
}

export default BlogCard;