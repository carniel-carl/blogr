import React from "react";
// import "./../Design/Design.scss";
import "./DesignB.scss";

import desktopImage from "./../../images/illustration-laptop-desktop.svg";
import mobileImage from "./../../images/illustration-laptop-mobile.svg";

const DesignB = () => {
  return (
    <section>
      <div className="container">
        <article className="text-section">
          <div>
            <h4>Free, open, simple</h4>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>

          <div>
            <h4>Powerful tooling</h4>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </article>
        <article className="image-sect">
          <picture>
            <source media="(max-width: 450px)" srcSet={mobileImage} />
            <img src={desktopImage} alt="desktop" />
          </picture>
        </article>
      </div>
    </section>
  );
};

export default DesignB;
