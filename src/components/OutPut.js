import React from "react";

function OutPut(props) {
  return (
      <div className="OutPut">
        <div><p>The Frequency of word <b>{props.result.word}</b> is: <b>{props.result.wordFrequency}</b></p></div>
        <div><p>Similar words are in note: <b>{props.result.similarWords.join(", ")}</b></p></div>
      </div>
  );
}

export default OutPut;
