import React, {useState,useMemo} from "react";
function Memo() {
    const [value,setValue]=useState(0);
    const [number,setNumber]=useState(5);
    const Fact =useMemo(() => {factorial(number);},[number])
    return(
        <>
        <h1>{Fact}</h1>
        <h1>{value}</h1>
        <button onClick= {()=> {setValue(value + 1);}}>Click Me</button>
        <h1>Number : {number}</h1>
        <button onClick={() => {setNumber(number + 1);}}>Fact Button</button><br /><br />
        </>
    )
}
const factorial=(n)=>{
    let answer=1;
    for(let i=1;i<=n;i++){
        answer=answer*i;
    }
    return answer;
}
export default Memo;