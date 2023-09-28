import React from "react";
import HigherOrderComponent from "./HOC";

const StudentA = (props) => {
  return (
    <>
      <p>StudentA</p>
      <h4>{props.num}</h4>
      <button onClick={props.handleEvent}>Count Inc</button>
    </>
  );
};

export default HigherOrderComponent(StudentA);
