import React, { Component } from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
  ssr: false
});

export default class MainBanner extends Component {
  state = {
    isOpen: false
  };
  openModal = () => {
    this.setState({isOpen: true})
  };
  render() {
    return (
      <>
        {/* If you want change the video need to update below videoID */}
        <ModalVideo 
          channel='youtube' 
          isOpen={this.state.isOpen} 
          videoId='szuchBiLrEM' 
          onClose={() => this.setState({isOpen: false})} 
        />

        <div className="cryptocurrency-banner-section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="cryptocurrency-banner-content">
                  <span className="sub-title">TRADE OVER 60 CRYPTOCURRENCIES</span>
                  <h1>
                    Buy, Sell, and Trade <span>Cryptocurrencies</span>
                  </h1>
                  <p>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements We work hand-in-hand with industry-leading
                    brands to help redefine the possibilities and potential.
                  </p>

                  <ul className="banner-btn">
                    <li>
                      <Link href="/contact">
                        <a className="default-btn">
                          Get Started <span></span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div
                        onClick={e => {e.preventDefault(); this.openModal()}}
                        className="video-btn"
                      > 
                        <i className="flaticon-play-button"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="cryptocurrency-banner-image">
                  <img
                    src="/images/cryptocurrency-home/banner/main.png"
                    alt="image"
                  />

                  <div className="cart1">
                    <img
                      src="/images/cryptocurrency-home/banner/cart1.png"
                      alt="cart1"
                    />
                  </div>
                  <div className="cart2">
                    <img
                      src="/images/cryptocurrency-home/banner/cart2.png"
                      alt="cart2"
                    />
                  </div>
                  <div className="graph">
                    <img
                      src="/images/cryptocurrency-home/banner/graph.png"
                      alt="graph"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cryptocurrency-shape-1">
            <img
              src="/images/cryptocurrency-home/banner/icon1.png"
              alt="image"
            />
          </div>
          <div className="cryptocurrency-shape-2">
            <img
              src="/images/cryptocurrency-home/banner/icon2.png"
              alt="image"
            />
          </div>
          <div className="cryptocurrency-shape-3">
            <img
              src="/images/cryptocurrency-home/banner/icon3.png"
              alt="image"
            />
          </div>
          <div className="cryptocurrency-shape-4">
            <img
              src="/images/cryptocurrency-home/banner/icon4.png"
              alt="image"
            />
          </div>
        </div>
      </>
    );
  }
}
