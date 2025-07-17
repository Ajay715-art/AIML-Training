import React, { useEffect, useState } from "react";

function CompTwo() {
  const [Value, setValue] = useState(0);
  const [number, setnumber] = useState(0);
  useEffect(() => {
    alert("hello");
  }, [number]);
  console.log("printed");

  return (
    <>
      <div>
        <h1>Value : {Value}</h1>
            <button onClick={() => setValue(Value + 1)}>Value Button</button>
            <br />
            <br />

            <h1>Number : {number}</h1>
            <button onClick={() => setnumber(number + 1)}>Number Button</button>
        </div>
        </>
    );
    }
    export default CompTwo;