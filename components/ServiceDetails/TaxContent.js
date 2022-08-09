import React, { Component } from "react";

class TaxContent extends Component {
  render() {
    return (
      <>
        <section className="services-details-area ptb-100">
          <div className="container">
            <div className="services-details-overview">
              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i>Local Taxes
                  </h4>
                  <p>
                    We help individuals and companies with the following
                    services:-
                  </p>
                  <ul>
                    <li>Filing Individual Income Taxes</li>
                    <li>Filing Corporate Income Taxes</li>
                    <li>Preparation of tax computation</li>
                    <li>
                      Application and follow up of objections with the Kenya
                      Revenue Authority (KRA)
                    </li>
                    <li>Application of Tax Compliance Certificates (TCCs)</li>
                  </ul>
                </div>
              </div>

              <div className="services-details-image wow fadeInUp">
                <img src="/images/creditcard.svg" alt="image" />
              </div>
            </div>

            <div className="services-details-overview">
              <div className="services-details-image wow fadeInUp">
                <img src="/images/finance.svg" alt="image" />
              </div>

              <div className="services-details-desc">
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> International Taxes
                  </h4>
                  <p>
                    Transfer pricing refers to the setting of prices for
                    transactions occurring between associated entities. It is a
                    common practice with globalization and growth in
                    international trade. Transfer pricing manipulation increases
                    the risk of capital flight and shifting of profits by
                    multinational enterprises. Kenya has put up measures to
                    protect her tax base from transfer pricing risks posed by
                    cross-border transactions between related entities, through
                    enactment and enhancement of tax legislation and
                    administration. Section 18(3) of the Income Tax Act, Chapter
                    470 of the Laws of Kenya provides that transactions between
                    resident and non-resident related parties, should for tax
                    purposes be at arm’s length. The OECD Guidelines outlines
                    the need for MNES having a three-tiered documentation of the
                    Transfer Pricing Documentation ie. Masterfile, Local file
                    and the Country-by-Country Report (CbCR). This has also been
                    enacted in Kenya through the Finance Act 2022.
                  </p>
                  <h5>Transfer Pricing policy documentation</h5>
                  <ul>
                    <li>
                      Documentation of the Company Overview, clearly indicating
                      the relationship between companies
                    </li>
                    <li>
                      Documentation of the industry analysis in view of the
                      sector in which the company operates
                    </li>
                    <li>
                      Review and documentation of the functions, assets, and
                      risk analysis
                    </li>
                    <li>
                      Selecting the most appropriate method for benchmarking the
                      controlled transactions.
                    </li>
                    <li>
                      Benchmarking the controlled transactions to establish
                      whether the mark- up or the margins applies are at arm’s
                      Length.
                    </li>
                  </ul>
                  <h5>Permanent establishment risk assessment</h5>
                  <ul>
                    <li>
                      Assessing whether an individuals or entity’s presence in a
                      jurisdiction triggers permanent establishment where the
                      company or individual would be deemed to be a resident in
                      that jurisdiction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default TaxContent;
