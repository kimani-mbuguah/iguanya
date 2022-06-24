import React, { Component } from 'react'
import Link from 'next/link'

export default class Services extends Component {
  render() {
    return (
      <>
          <div className="bd-services-area pt-100 pb-70">
            <div className="container">
                <div className="section-title with-line-text-with-white-color">
                    <span className="sub-title">OUR SERVICES</span>
                    <h2>See Wide Range Of Our <span>Services</span> With Big Data Solutions</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="bd-services-card">
                            <div className="services-image">
                                <img src="/images/big-data-home/services/image-1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Big Data Integration</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur adipiscing elit.</p>

                            <Link href="/service-details">
                                <a className="get-started-btn">GET STARTED</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="bd-services-card">
                            <div className="services-image">
                                <img src="/images/big-data-home/services/image-2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Big Data Management</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur adipiscing elit.</p>
                            <Link href="/service-details">
                                <a className="get-started-btn">GET STARTED</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="bd-services-card">
                            <div className="services-image">
                                <img src="/images/big-data-home/services/image-3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Big Data Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur adipiscing elit.</p>
                            <Link href="/service-details">
                                <a className="get-started-btn">GET STARTED</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="bd-services-card">
                            <div className="services-image">
                                <img src="/images/big-data-home/services/image-4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Content Management</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur adipiscing elit.</p>
                            <Link href="/service-details">
                                <a className="get-started-btn">GET STARTED</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="bd-services-card">
                            <div className="services-image">
                                <img src="/images/big-data-home/services/image-5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Cloud Management</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur adipiscing elit.</p>
                            <Link href="/service-details">
                                <a className="get-started-btn">GET STARTED</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="bd-services-card">
                            <div className="services-image">
                                <img src="/images/big-data-home/services/image-6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Data System Management</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo. Lorem ipsum dolor sit amet, is consectetur adipiscing elit.</p>
                            <Link href="/service-details">
                                <a className="get-started-btn">GET STARTED</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
