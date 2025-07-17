import React, { useState } from "react";

function Maps() {
  const [value, setValue] = useState([
    { id: 1, value: "Ajay" },
    { id: 2, value: "Rohit" },
    { id: 3, value: "Sahil" },
    { id: 4, value: "Suresh" },
  ]);

  return (
    <>
      <h1>Details</h1>
      <ul>
        {value.map((val) => (
          <li key={val.id}>Value: {val.value}</li>
        ))}
      </ul>
    </>
  );
}

export default Maps;