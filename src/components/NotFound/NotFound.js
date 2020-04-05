import React from "react";
import PropTypes from "prop-types";
import "./NotFound.css";

const NotFound = () => (
  <div className="NotFound" data-testid="NotFound">
    <h1 className="display-4">
      <span className="text-danger">404</span> Page Not Found
    </h1>
    <p className="lead">Sorry, that page does not exist.</p>
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
