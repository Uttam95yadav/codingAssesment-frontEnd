import React from "react";
import {Alert} from "react-bootstrap";

function OutPut(props) {
  return (
      <div className="OutPut"><br/>
        <Alert variant="success">
          <p>The Frequency of word <b>{props.result.word}</b> is: <b>{props.result.wordFrequency}</b></p>
        </Alert>
        <Alert variant="success">
          <p>Similar words are in note: <b>{props.result.similarWords.join(", ")}</b></p>
        </Alert>
      </div>
  );
}

export default OutPut;
