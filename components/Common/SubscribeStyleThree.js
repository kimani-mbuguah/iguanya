import React, { Component } from 'react';

class SubscribeStyleThree extends Component {
    render() {
        return (
            <section className="free-trial-area ptb-100 bg-f4f7fe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="ft-img">
                                <img src="/images/machine-learning/free-trial-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="subscribe-content">
                                <span className="sub-title">Get Started Instantly!</span>
                                <h2>Get only new update from this newsletter</h2>
        
                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" required />
        
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SubscribeStyleThree;