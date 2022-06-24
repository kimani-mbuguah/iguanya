import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

export default class StartMiningCrypto extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        {/* If you want change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />

        <div className="mining-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="mining-image">
                  <img
                    src="/images/cryptocurrency-home/mining.png"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="mining-content">
                  <span className="sub-title">START MINING CRYPTO</span>
                  <h3>
                    Start <span>Mining Crypto</span> Currency Today With Us
                  </h3>
                  <p>
                    Bitcoin is a cryptocurrency and worldwide payment system. It
                    is the first decentralized digital currency, as the system
                    works without a central bank or single administrator. The
                    network is peer-to-peer and transactions take place between
                    users directly.
                  </p>

                  <ul className="mining-btn">
                    <li>
                      <Link href="/contact">
                        <a className="default-btn">
                          Get Started <span></span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.openModal();
                        }}
                        className="video-btn"
                      >
                        <i className="flaticon-play-button"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
