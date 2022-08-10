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
    coins: [],
    mappedCoins: "",
    loading: true,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=monero%2Cshiba-inu%2Cdogecoin%2Ccardano%2Cripple%2Cbinancecoin%2Cbinancecoin%2Ctether%2Cpesabase%2Cbitcoin%2Cethereum&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false"
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        this.setState({ coins: response, loading: false });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <div className="value-trade-area">
          <div className="container-fluid">
            {this.state.display && !this.state.loading ? (
              <OwlCarousel
                className="value-trade-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/BTC.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Bitcoin (BTC)</b> ${this.state.coins.bitcoin.usd}{" "}
                    {this.state.coins.bitcoin.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.bitcoin.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.bitcoin.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/ETH.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Ethereum (ETH)</b> ${this.state.coins.ethereum.usd}{" "}
                    {this.state.coins.ethereum.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.ethereum.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.ethereum.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/USDT.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Tether (USDT)</b> ${this.state.coins.tether.usd}{" "}
                    {this.state.coins.tether.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.tether.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.tether.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/BNB.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Binance Coin (BNB)</b> $
                    {this.state.coins.binancecoin.usd}{" "}
                    {this.state.coins.binancecoin.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.binancecoin.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.binancecoin.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/XRP.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Ripple (XRP)</b> ${this.state.coins.ripple.usd}{" "}
                    {this.state.coins.ripple.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.ripple.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.ripple.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/ADA.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Cardano (ADA)</b> ${this.state.coins.cardano.usd}{" "}
                    {this.state.coins.cardano.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.cardano.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.cardano.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/DOGE.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Dogecoin (DOGE)</b> ${this.state.coins.dogecoin.usd}{" "}
                    {this.state.coins.dogecoin.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.dogecoin.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.dogecoin.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>

                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/XMR.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Monero (XMR)</b> ${this.state.coins.monero.usd}{" "}
                    {this.state.coins.monero.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.monero.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.monero.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
                  </p>
                </div>
                <div className="value-trade-card">
                  <img
                    src="/images/cryptocurrency-home/value-trade/PESA.png"
                    alt="image"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <p>
                    <b>Pesabase (PESA)</b> ${this.state.coins.pesabase.usd}{" "}
                    {this.state.coins.pesabase.usd_24h_change
                      .toString()
                      .substring(0, 1) === "-" ? (
                      <span className="color-two">
                        <i className="bx bx-down-arrow-alt"></i>{" "}
                        {this.state.coins.pesabase.usd_24h_change
                          .toString()
                          .substring(0, 6)}
                        %
                      </span>
                    ) : (
                      <span>
                        <i className="bx bx-up-arrow-alt"></i>{" "}
                        {this.state.coins.pesabase.usd_24h_change
                          .toString()
                          .substring(0, 5)}
                        %
                      </span>
                    )}
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
