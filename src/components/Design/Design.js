import React from "react";
import "./Design.scss";

import desktopImage from "./../../images/illustration-editor-desktop.svg";
import mobileImage from "./../../images/illustration-editor-mobile.svg";

const Design = () => {
  return (
    <section>
      <h3>Designed for the future</h3>
      <div className="conatiner">
        <article className="text-section">
          <div>
            <h4>Introducing an extensible editor</h4>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div>
            <h4>Robust content management</h4>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </article>
        <article className="image-section">
          <picture>
            <source media="(max-width: 450px)" srcSet={mobileImage} />
            <img src={desktopImage} alt="desktop" />
          </picture>
        </article>
      </div>
    </section>
  );
};

export default Design;
