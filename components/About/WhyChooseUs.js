import React, { Component } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class WhyChooseUs extends Component {
  state = {
    marketData: [],
    loading: true,
  };

  componentDidMount() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d"
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        this.setState({ marketData: response, loading: false });
      });
  }
  render() {
    console.log(this.state.marketData);
    return (
      <>
        <section className="why-choose-area pb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <Table className="market-table">
                  <Thead>
                    <Tr>
                      <Th>#</Th>
                      <Th>Name</Th>
                      <Th>Price</Th>
                      <Th>ATH</Th>
                      <Th>24h%</Th>
                      <Th>7D%</Th>
                      <Th>Market Cap</Th>
                      <Th>24h Volume</Th>
                      <Th>Circulating Supply</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {this.state.marketData.length > 0 && !this.state.loading
                      ? this.state.marketData.map((coin, index) => (
                          <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>
                              <img src={coin.image} alt="image" />
                              {coin.name} {coin.symbol.toUpperCase()}
                            </Td>
                            <Td>
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(coin.current_price)}
                            </Td>
                            <Td>
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(coin.ath)}
                            </Td>

                            <Td>
                              {coin.price_change_percentage_24h_in_currency
                                .toString()
                                .substring(0, 1) === "-" ? (
                                <span style={{ color: "#FF6C6C" }}>
                                  <i className="bx bx-down-arrow-alt"></i>{" "}
                                  {coin.price_change_percentage_24h_in_currency
                                    .toString()
                                    .substring(0, 6)}
                                  %
                                </span>
                              ) : (
                                <span style={{ color: "#76BAAF" }}>
                                  <i className="bx bx-up-arrow-alt"></i>{" "}
                                  {coin.price_change_percentage_24h_in_currency
                                    .toString()
                                    .substring(0, 6)}
                                </span>
                              )}
                            </Td>
                            <Td>
                              {coin.price_change_percentage_7d_in_currency
                                .toString()
                                .substring(0, 1) === "-" ? (
                                <span style={{ color: "#FF6C6C" }}>
                                  <i className="bx bx-down-arrow-alt"></i>{" "}
                                  {coin.price_change_percentage_7d_in_currency
                                    .toString()
                                    .substring(0, 6)}
                                  %
                                </span>
                              ) : (
                                <span style={{ color: "#76BAAF" }}>
                                  <i className="bx bx-up-arrow-alt"></i>{" "}
                                  {coin.price_change_percentage_7d_in_currency
                                    .toString()
                                    .substring(0, 6)}
                                </span>
                              )}
                            </Td>
                            <Td>
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(coin.market_cap)}
                            </Td>
                            <Td>
                              {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(coin.total_volume)}
                            </Td>
                            <Td>
                              {coin.circulating_supply}{" "}
                              {coin.symbol.toUpperCase()}
                            </Td>
                          </Tr>
                        ))
                      : ""}
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WhyChooseUs;
