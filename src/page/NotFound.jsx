import React from "react";
import Error from "../images/page-misc-error-light.png";

function NotFound() {
    
    return (
    <div className="wrapper">
      <div className="misc-wrapper">
        <h2 className="mb-2 mx-2">Page Not Found :(</h2>
        <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
        <a href={"/"} className="btn btn-primary">Back to home</a>
        <div className="mt-3">
          <img
            src={Error}
            alt="page-misc-error-light"
            width="500"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
    )
}
export default NotFound;