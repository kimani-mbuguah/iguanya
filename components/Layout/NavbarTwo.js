import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SidebarModal from '../SidebarModal/SidebarModal';

class NavbarTwo extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
               <div id="navbar" className="navbar-area navbar-area-two">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" className="black-logo" alt="logo" />
                                        <img src="/images/logo-white.png"  className="white-logo" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Home <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a className="nav-link">
                                                            Creative Agency
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index2" activeClassName="active">
                                                        <a className="nav-link">
                                                            Strategic Agency
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index3" activeClassName="active">
                                                        <a className="nav-link">
                                                            Digital Agency
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index4" activeClassName="active">
                                                        <a className="nav-link">
                                                            Marketing Agency
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index5" activeClassName="active">
                                                        <a className="nav-link">
                                                            IT Startup
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index6" activeClassName="active">
                                                        <a className="nav-link">
                                                            SEO Agency
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index7" activeClassName="active">
                                                        <a className="nav-link">
                                                            SaaS Agency
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index8" activeClassName="active">
                                                        <a className="nav-link">
                                                            AI & Machine Learning
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index9" activeClassName="active">
                                                        <a className="nav-link">
                                                            Portfolio Agency
                                                        </a>
                                                    </Link>
                                                </li>
 
                                                <li className="nav-item">
                                                    <Link href="/index10" activeClassName="active">
                                                        <a className="nav-link">
                                                            Cryptocurrency
                                                            <span className="new">New</span>
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index11" activeClassName="active">
                                                        <a className="nav-link">
                                                            Cyber Security
                                                            <span className="new">New</span>
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index12" activeClassName="active">
                                                        <a className="nav-link">
                                                            Big Data Solution
                                                            <span className="new">New</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Pages <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/about" activeClassName="active">
                                                        <a className="nav-link">About Us Style One</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/about2" activeClassName="active">
                                                        <a className="nav-link">About Us Style Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a className="nav-link">Team Style One</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/team2" activeClassName="active">
                                                        <a className="nav-link">Team Style Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/features" activeClassName="active">
                                                        <a className="nav-link">Features</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/partner" activeClassName="active">
                                                        <a className="nav-link">Partner</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/login" activeClassName="active">
                                                        <a className="nav-link">Login</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/signup" activeClassName="active">
                                                        <a className="nav-link">Signup</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a className="nav-link">FAQ</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/404" activeClassName="active">
                                                        <a className="nav-link">404 Error Page</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/services" activeClassName="active">
                                                        <a className="nav-link">Services Style One</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/services2" activeClassName="active">
                                                        <a className="nav-link">Services Style Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/services3" activeClassName="active">
                                                        <a className="nav-link">Services Style Three</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/service-details" activeClassName="active">
                                                        <a className="nav-link">
                                                            Service Details
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Projects <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/projects" activeClassName="active">
                                                        <a className="nav-link">Projects Style One</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/projects2" activeClassName="active">
                                                        <a className="nav-link">Projects Style Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/projects3" activeClassName="active">
                                                        <a className="nav-link">Projects Style Three</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/projects4" activeClassName="active">
                                                        <a className="nav-link">Projects Style Four</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/project-details" activeClassName="active">
                                                        <a className="nav-link">
                                                            Project Details
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Shop <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/shop" activeClassName="active">
                                                        <a className="nav-link">Shop</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/single-product" activeClassName="active">
                                                        <a className="nav-link">Single product</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Blog <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/blog2" activeClassName="active">
                                                        <a className="nav-link">Blog Right Sidebar</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="others-options">
                                    <div className="cart-items">
                                        <Link href="/cart">
                                            <a>
                                                <i className="fas fa-shopping-cart"></i> 
                                                <span>{products.length}</span>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn flaticon-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn flaticon-close ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="burger-menu" onClick={this.toggleModal}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar Modal */}
                <SidebarModal 
                    onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} 
                />
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(NavbarTwo);

// export default Navbar;
