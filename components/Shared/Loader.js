import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <>
                <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                    <div className="loader">
                        {/* <div className="shadow"></div> */}
                        <img src="/images/neon2-anim.svg" alt="logo"  />
                        {/* <div className="box"></div> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Loader;