import React from "react";
import cx from "./Error404.module.scss";
import { NavLink } from "react-router-dom";



function Error404() {
  return (
    <>
      <section>
        <div className={`${cx.error_404}`}>
            <h1>404</h1>
            <p>Sorry , this page is not found !</p>
            <NavLink to="/business-setup" className={`btn ${cx.setupBtn}`}>Redirect to Business Setup</NavLink>
          </div>
      </section>
    </>
  );
}

export default Error404;
