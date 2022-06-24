import React, { Component } from 'react';
import Link from 'next/link';

export class SidebarModal extends Component {
    state = {
        modal: false
    };
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }
    render() {
        return (
            <>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>About Us</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>
                        </div>

                        <div className="sidebar-instagram-feed">
                        <h3>Gallery</h3>
                            <ul className="footer-instagram-post">
                                <li>
                                    <img src="/images/gallery/android2b.png" alt="image" />
                                </li>
                                <li>
                                    <img src="/images/gallery/person2.png" alt="image" />
                                </li>
                                <li>
                                    <img src="/images/gallery/iphone23b.png" alt="image" />
                                </li>
                                <li>
                                    <img src="/images/gallery/e-vector-3-quotes.png" alt="image" />
                                </li>
                                <li>
                                    <img src="/images/gallery/iphone24c.png" alt="image" />
                                </li>
                                <li>
                                    <img src="/images/gallery/bag.png" alt="image" />
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        <span className="main-color">
                                            +254 725 136 849
                                        </span>
                                        <span className="or">OR</span>
                                        <span>info@iguanya.com</span>
                                    </h2>
            
                                    <ul className="social">
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-close"></i>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default SidebarModal;