import React, { Component } from 'react';
import Link from 'next/link';

class PageHeader extends Component {
    render() {
        
        let { pageTitle, breadcrumbTextOne, breadcrumbTextTwo, breadcrumbUrl } = this.props;

        return (
            <>
                <div className="page-title-area page-title-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{pageTitle}</h2>
                                    <ul>
                                        <li>
                                            <Link href={breadcrumbUrl}>
                                                <a>{breadcrumbTextOne}</a>
                                            </Link>
                                        </li>
                                        <li>{breadcrumbTextTwo}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
                    <div className="shape-img2">
                        <img src="/images/shape/shape2.svg" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/images/shape/shape3.svg" alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src="/images/shape/shape4.png" alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src="/images/shape/shape5.png" alt="image" />
                    </div>
                    <div className="shape-img7">
                        <img src="/images/shape/shape7.png" alt="image" />
                    </div>
                    <div className="shape-img8">
                        <img src="/images/shape/shape8.png" alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src="/images/shape/shape10.png" alt="image" />
                    </div>
                </div>
            </>
        );
    }
}

export default PageHeader;