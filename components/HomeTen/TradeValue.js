import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 2,
    },
    1400: {
      items: 3,
    },
    1600: {
      items: 4,
    },
  },
};

class Tradevalue extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <>
        <div className="value-trade-area">
          <div className="container-fluid">
            {this.state.display ? (
              <OwlCarousel
                className="value-trade-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/REN.png"
                    alt="image"
                  />
                  <p>
                    <b>RenBridges (REN)</b> $0.00475688{" "}
                    <span>
                      <i className="bx bx-up-arrow-alt"></i> +0.017%
                    </span>
                  </p>
                </div>

                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/BTC.png"
                    alt="image"
                  />
                  <p>
                    <b>Bitcoin (BTC)</b> $0.00475688{" "}
                    <span>
                      <i className="bx bx-up-arrow-alt"></i> +0.017%
                    </span>
                  </p>
                </div>

                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/layer.png"
                    alt="image"
                  />
                  <p>
                    <b>Yearn (YFI)</b> $0.00475688{" "}
                    <span className="color-two">
                      <i className="bx bx-down-arrow-alt"></i> +0.017%
                    </span>
                  </p>
                </div>

                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/USDT.png"
                    alt="image"
                  />
                  <p>
                    <b>Tether (USDT)</b> $0.00475688{" "}
                    <span className="color-two">
                      <i className="bx bx-down-arrow-alt"></i> +0.017%
                    </span>
                  </p>
                </div>

                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/ETH.png"
                    alt="image"
                  />
                  <p>
                    <b>Ethereum (ETH)</b> $0.00475688{" "}
                    <span>
                      <i className="bx bx-up-arrow-alt"></i> +0.017%
                    </span>
                  </p>
                </div>

                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/SNX.png"
                    alt="image"
                  />
                  <p>
                    <b>Synthetix (Snx)</b> $0.00475688{" "}
                    <span>
                      <i className="bx bx-up-arrow-alt"></i> +0.017%
                    </span>
                  </p>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Tradevalue;
