import React from "react";

const Footer = (props) => {
  return (
    <div className="col-md-12 text-center footer navbar-dark d-flex justify-content-center align-items-center">
      <span className="text-light copy">{props.footer}</span>
    </div>
  );
};

export default Footer