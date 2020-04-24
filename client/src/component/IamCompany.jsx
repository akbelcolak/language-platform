import React from "react";
import "./company.css";

export default function IamCompany() {
  return (
    <div>
      <div className="container">
        <section className="articles">
          <div className="column is-8 is-offset-2">
            <section className="hero is-info is-medium is-bold">
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title">
                    SET AN OFFER <br />
                    Give a Chance, Find a Gem
                  </h1>
                </div>
              </div>
            </section>
            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <p className="title article-title">
                      Please set an offer by sending an email to <br />
                      test.cloud123@domain.net <br />
                    </p>
                    <div className="tags has-addons level-item">
                      <span className="tag is-rounded is-info">@akbel</span>
                      <span className="tag is-rounded">Apr 17, 2020</span>
                    </div>
                  </div>
                </div>
                <div className="content article-body">
                  <h3 className="has-text-centered">
                    Please write your email in this format:
                  </h3>
                  <ul>
                    <li>Subject: Offer Header</li>
                    <li>Company Name</li>
                    <li>Location of the Company</li>
                    <li>Which skills you look for</li>
                    <li>Number of the volunteers you look for</li>
                    <li>The start and end date for the work</li>
                    <li>Any additional note</li>
                  </ul>
                  <p>
                    By Setting an offer YOU are gaining an opportunity to have a
                    skillfull volunteer for your company.
                  </p>
                </div>
              </div>
            </div>

            <div className="card article">
              <div className="card-content">
                <div className="media">
                  <div className="media-center">
                    <img
                      src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg"
                      className="author-image"
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="media-content has-text-centered">
                    <p className="subtitle is-6 article-subtitle">
                      <link href="#">@Paula</link> on April 15, 2020
                    </p>
                  </div>
                </div>
                <div className="content article-body">
                  <h3 className="has-text-centered">User Experiences</h3>
                  <p>
                    I am a Paula. Thanks to LinguaSphere, I am ready to work in
                    Belgium!
                    <br />
                    Let me tell you how: I had worked for 10 years as Pharmacist
                    in Argantina before I moved to Belgium. My Dutch level is C1
                    which is pretty enough for any job opportunity in the market
                    yet I didnot have the courege to apply any job application
                    due to lack of mondeling skills. Also I needed to learn the
                    Pharmaceutical Terms in Dutch which is not thought in
                    language courses. With LinguaSphere I have found 2
                    Pharmacist that matched my profile. I have made my
                    language-intern with one of them and now I am ready for real
                    work!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
