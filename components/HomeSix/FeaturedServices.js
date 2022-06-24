import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedServices extends Component {
    render() {
        return (
            <section className="seo-featured-services pt-100 pb-70 gray-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="section-title text-left">
                                <span className="sub-title">Featured services</span>
                                <h2>Create Awesome Service with our Tools</h2>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="service-card-one bg-white center">
                                        <div className="icon">
                                            <i className="bx bx-conversation"></i>
                                            <i className='bx bxs-badge-check check-icon'></i>
                                        </div>
                                        <h3>
                                            <Link href="/service-details">
                                                <a>SEO Consultancy</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="service-card-one bg-white center">
                                        <div className="icon">
                                            <i className='bx bx-bar-chart-alt-2'></i>
                                            <i className='bx bxs-badge-check check-icon'></i>
                                        </div>
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Marketing Analysis</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="service-card-one bg-white center">
                                        <div className="icon">
                                            <i className='bx bx-search-alt'></i>
                                            <i className='bx bxs-badge-check check-icon'></i>
                                        </div>
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Website Optimization</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="service-card-one bg-white center">
                                        <div className="icon">
                                            <i className='bx bx-mail-send'></i>
                                            <i className='bx bxs-badge-check check-icon'></i>
                                        </div>
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Email Marketing</a>
                                            </Link>
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedServices;