import React, { useState } from "react";

const HigherOrderComponent = (Student) => {
  function HigherOrderComponentInner() {
    // HigherOrderComponentInner is Functional Component.
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
