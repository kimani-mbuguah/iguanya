import React, { Component } from 'react';
import Link from 'next/link';

class LetsGetToWork extends Component {
    render() {
        return (
            <section className="subscribe-area bg-F4F7FC">
                <div className="subscribe-inner-area lets-work jarallax">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <span className="sub-title">READY TO DO THIS</span>
                                <h2>Let's get to work!</h2>
                            </div>

                            <div className="col-lg-6">
                                <div className="contact-btn">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Contact Us <span></span>
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

export default LetsGetToWork;