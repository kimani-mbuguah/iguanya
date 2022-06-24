import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class AboutArea extends Component {
    state = {
        isOpen: false
    };
    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <section className="about-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img2.jpg" alt="image" className="rounded-10" />

                                <div className="solution-video">
                                    <div
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="flaticon-play-button"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">About Us</span>
                                <h2>We Are Digital Explorers</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                <ul className="features-list">
                                    <li><span><i className="fas fa-check"></i> Recommender systems</span></li>
                                    <li><span><i className="fas fa-check"></i> Demand prediction</span></li>
                                    <li><span><i className="fas fa-check"></i> Omnichannel analytics</span></li>
                                    <li><span><i className="fas fa-check"></i> Lead generation</span></li>
                                    <li><span><i className="fas fa-check"></i> Dedicated Developers</span></li>
                                    <li><span><i className="fas fa-check"></i> 24/7 Support</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-inner-area">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our History</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Activate Listening</li>
                                            <li><i className="flaticon-tick"></i> Brilliant minds</li>
                                            <li><i className="flaticon-tick"></i> Better. Best. Wow!</li>
                                            <li><i className="flaticon-tick"></i> Branding it better!</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Our Mission</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Creating. Results.</li>
                                            <li><i className="flaticon-tick"></i> Expect more</li>
                                            <li><i className="flaticon-tick"></i> Good thinking</li>
                                            <li><i className="flaticon-tick"></i> In real we trust</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-text">
                                        <h3>Who we are</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                                        
                                        <ul className="features-list">
                                            <li><i className="flaticon-tick"></i> Stay real. Always.</li>
                                            <li><i className="flaticon-tick"></i> We have you covered</li>
                                            <li><i className="flaticon-tick"></i> We turn heads</li>
                                            <li><i className="flaticon-tick"></i> Your brand, promoted</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </section>
        );
    }
}

export default AboutArea;