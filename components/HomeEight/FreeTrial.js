import React, { Component } from 'react';

class FreeTrial extends Component {
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
                                <h2>Start your free trial</h2>
        
                                <form className="newsletter-form">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="email" />
                                    <button type="submit">Sign Up Free</button>
                                </form>

                                <p className="help-text">Test out the Machine Learning features for 14 days, no credit card required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FreeTrial;