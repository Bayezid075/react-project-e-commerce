import "./Loading.css";
import { Spinner } from "react-bootstrap";

import React from "react";

const Loading = () => {
  return (
    <div>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className="sr-only">Loading =.....</span>
      </Spinner>
    </div>
  );
};

export default Loading;
