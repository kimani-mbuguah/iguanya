import React, { Component } from "react";

export default class StartTradingAndEarning extends Component {
  render() {
    return (
      <>
        <div className="trade-over-area pb-100">
          <div className="container">
            <div className="section-title with-linear-gradient-text">
              <span className="sub-title">TRADE OVER 50 CRYPTO</span>
              <h2>
                Start Trading & Earning <span>Interests On</span> Any Amount Of
                Crypto
              </h2>
            </div>

            <div className="trade-over-inner-box pt-100 pb-70">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="trade-over-card">
                    <div className="over-image">
                      <img
                        src="/images/cryptocurrency-home/trade-over/BTC.png"
                        alt="image"
                      />
                    </div>
                    <p>
                      <b>BTC</b> Bitcoin <span>+6.87%</span>
                    </p>
                    <h3>413.3739</h3>
                    <span>$413.3739</span>

                    <div className="over-shape">
                      <img
                        src="/images/cryptocurrency-home/trade-over/vector.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="trade-over-card">
                    <div className="over-image">
                      <img
                        src="/images/cryptocurrency-home/trade-over/LINK.png"
                        alt="image"
                      />
                    </div>
                    <p>
                      <b>LINK</b> Bidr <span className="color-two">-1.87%</span>
                    </p>
                    <h3>513.3739</h3>
                    <span>$513.3739</span>

                    <div className="over-shape">
                      <img
                        src="/images/cryptocurrency-home/trade-over/chart.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="trade-over-card">
                    <div className="over-image">
                      <img
                        src="/images/cryptocurrency-home/trade-over/MATIC.png"
                        alt="image"
                      />
                    </div>
                    <p>
                      <b>MATIC</b> Bidr <span>+6.87%</span>
                    </p>
                    <h3>713.3739</h3>
                    <span>$713.3739</span>

                    <div className="over-shape">
                      <img
                        src="/images/cryptocurrency-home/trade-over/vector.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
