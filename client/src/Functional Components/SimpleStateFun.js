import { useState } from "react"
function SimpleStateFun(props){
    let [count,setCount]=useState(0)
    //const username=useState("admin")
    const increment=()=>{
       // count=count+1
       setCount(count+1)
        console.log("count",count)
    }
    return(
        <div>
            {/*console.log(useState("initial"))*/}
            {/*console.log(count)*/}
            {console.log("render")}
            <h1>State in Functional Components</h1>
            <button onClick={()=>increment()}>+</button>
            {count}
            <button>-</button>
           {/*<h1>{username[0]}</h1>*/}
        </div>
    )
}
export default SimpleStateFun