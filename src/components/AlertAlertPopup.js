import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

import { Button } from "react-bootstrap";

const AlertPopup = (props) => {
  const winner = props.ticOX.current === "X" ? "O" : "X";

  return (
    <div className="popUp">
      <Alert  variant="success">
        <Alert.Heading> {props.ticOX.message}</Alert.Heading>
        <p>
          {props.ticOX.message === "Congrats!"
            ? `Winner ${winner}`
            : "It's Draw! No Winner"}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => (props.setShow(true), window.location.reload(false))}
            variant="outline-success"
          >
            Play Again!
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertPopup;
