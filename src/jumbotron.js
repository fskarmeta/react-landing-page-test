import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="col-md-12">
      <div className="jumbotron">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            {props.button}
          </a>
        </p>
      </div>
    </div>
  );
};
export default Jumbotron