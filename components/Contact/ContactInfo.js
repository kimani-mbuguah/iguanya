import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <section className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <h3>Email</h3>
                <p>info@iguanya.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>Location</h3>
                <p>Nairobi Kenya</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-phone-call"></i>
                </div>
                <h3>Call</h3>
                <p>+254 725 136 849</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactInfo;
