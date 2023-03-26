import { useState,useEffect } from "react";

function UseEffectComponent(props){
    const [count,setCount]=useState(0)
    const [flag,setFlag]=useState(false)
    
    useEffect(()=>{
        console.log("useeffect")
    },[flag,count])
    const increment=()=>{
        setCount(count+1)
    }
    const changeFlag=()=>{
        setFlag(!flag)
    }
    return(
        <>
        {console.log("render")}
        <h1>Use effect hook {count}</h1>
        <h2>props {props.data}</h2>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>changeFlag()}>change flag</button>
        </>
    )
}
export default UseEffectComponent