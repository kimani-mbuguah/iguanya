import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import SidebarModal from "../SidebarModal/SidebarModal";

class Navbar extends Component {
  // Sidebar Modal
  state = {
    sidebarModal: false,
  };
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    });
  };

  // Search Form
  state = {
    searchForm: false,
  };
  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/brandmark-design-180x0.png"
                      alt="logo"
                      className="logo-img"
                    />
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
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Our Services</a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link href="/projects">
                        <a className="nav-link">Projects</a>
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      <Link href="/blog">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/crypto-markets" activeClassName="active">
                        <a className="nav-link">Crypto Market</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-options">
                  <div className="option-item">
                    <i
                      onClick={this.handleSearchForm}
                      className="search-btn flaticon-search"
                      style={{
                        display: this.state.searchForm ? "none" : "block",
                      }}
                    ></i>

                    <i
                      onClick={this.handleSearchForm}
                      className={`close-btn flaticon-close ${
                        this.state.searchForm ? "active" : ""
                      }`}
                    ></i>

                    <div
                      className="search-overlay search-popup"
                      style={{
                        display: this.state.searchForm ? "block" : "none",
                      }}
                    >
                      <div className="search-box">
                        <form className="search-form">
                          <input
                            className="search-input"
                            name="search"
                            placeholder="Search"
                            type="text"
                          />
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
          onClick={this.toggleModal}
          active={this.state.sidebarModal ? "active" : ""}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
  };
};

export default Navbar;

// export default Navbar;
