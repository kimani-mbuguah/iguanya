import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-conversation'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>SEO Consultancy</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-search-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Website Optimization</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bullseye'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Target Analysis</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Keyword Research</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-check-shield' ></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Continuous Testing</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Marketing Analysis</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-search-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Content Optimization</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-mail-send'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Email Marketing</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-data'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>PPC Management</a>
                                    </Link>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12 col-sm-12">
                            <div className="pagination-area">
                                <Link href="/services3#">
                                    <a className="prev page-numbers">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </Link>
                                <Link href="/services3#">
                                    <a className="page-numbers">1</a>
                                </Link>
                                <span className="page-numbers current">2</span>
                                <Link href="/services3#">
                                    <a className="page-numbers">3</a>
                                </Link>
                                <Link href="/services3#">
                                    <a className="page-numbers">4</a>
                                </Link>
                                <Link href="/services3#">
                                    <a className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;