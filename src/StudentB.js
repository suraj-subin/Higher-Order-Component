import React from "react";
import HigherOrderComponent from "./HOC";

const StudentB = (props) => {
  return (
    <>
      <p>StudentB</p>
      <h4>{props.num}</h4>
      <button onClick={props.handleEvent}>Count Inc</button>
    </>
  );
};

export default HigherOrderComponent(StudentB);
