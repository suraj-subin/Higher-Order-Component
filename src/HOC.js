import React, { useState } from "react";

// In React, a higher-order component is a function that takes a component as an argument and returns a new component.
// Higher Order Component vitra functional component halnu parxa.

const HigherOrderComponent = (Student) => {
  function HigherOrderComponentInner() {
    // HigherOrderComponentInner yo  Functional Component ho.
    const [num, setNum] = useState(0);

    const handleEvent = () => {
      setNum(num + 5);
    };
    return (
      <>
        <Student num={num} handleEvent={handleEvent} />
      </>
    );
  }
  return HigherOrderComponentInner;
};

export default HigherOrderComponent;
