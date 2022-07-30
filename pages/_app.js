import "/styles/bootstrap.min.css";
import "/styles/fontawesome.min.css";
import "/styles/animate.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";

// Global CSS
import "/styles/style.css";
import "/styles/responsive.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 500);
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="We strive to help our clients reach their goals by offering them the perfect combination of technology, expertise, and customer service."
          />
          <meta
            name="keywords"
            content="Web development, IT Consultancy, Digital Marketing, Mobile App Development, eCommerce Development, IT Solutions, Tax, Transfer Pricing"
          />
          <meta name="author" content="Kimani Mbugua" />
          <title>Iguanya - Make it happen</title>
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        <Loader loading={this.state.loading} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </>
    );
  }
}
