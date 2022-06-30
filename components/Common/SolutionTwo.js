import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class SolutionTwo extends Component {
    state = {
        isOpen: false
    };
    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <>
                <section className="solution-area ptb-100 jarallax">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="solution-content">
                                    <h2>Why Choose us</h2>
                                    <p>We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>

                                    <Link href="/contact">
                                        <a className="default-btn">Contact Us <span></span></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
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
                    </div>
                </section>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='X2uCZ8qXJKw' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default SolutionTwo;