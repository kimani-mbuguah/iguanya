import React, { Component } from 'react'

export default class WhyChooseUs extends Component {
  render() {
    return (
      <>
          <div className="bd-choose-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="bd-choose-content">
                            <span className="sub-title">WHY CHOOSE TAIKER</span>
                            <h3>Do What Matters <span>And We'll</span> Handle The Back Office Routine</h3>
                            <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential.</p>

                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-sm-6">
                                    <ul className="list">
                                        <li><i className="fa-solid fa-check"></i> Demand Prediction</li>
                                        <li><i className="fa-solid fa-check"></i> Lead Generation</li>
                                        <li><i className="fa-solid fa-check"></i> Product Line Optimization</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <ul className="list">
                                        <li><i className="fa-solid fa-check"></i> Preventive Maintenance</li>
                                        <li><i className="fa-solid fa-check"></i> Logistics Optimization</li>
                                        <li><i className="fa-solid fa-check"></i> Warehouse Optimization</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="choose-btn">
                                <a href="contact.html" className="default-btn">
                                    Get Started <span></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="bd-choose-image">
                            <img src="/images/big-data-home/choose.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
