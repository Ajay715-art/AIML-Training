import React, { Component } from 'react';

function CompOne(props) {
  return (
    <div className='details'>
      <h1>Name : {props.name} </h1>
      <h1>Roll NO : {props.rollno}</h1>
      <h1>Age : {props.age}</h1>
      <h1>{props.imgSrc && (<img className='ff' src={props.imgSrc} />)}</h1>
    </div>
  );
}
export default CompOne;