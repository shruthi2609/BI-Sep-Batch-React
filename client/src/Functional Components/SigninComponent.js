import { useState } from "react"
import axios from "axios"
function SigninComponent(){
    const [uname,setUname]=useState("")
    const [pword,setPword]=useState("")
    const handleUsername=(e)=>{
       setUname(e.target.value)
    }
    const handlePassword=(e)=>{
      setPword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/signin",{
            username:uname,
            password:pword
        }).then((res)=>console.log(res)).catch((e)=>console.log(e))
       
    }
    return(
        <div>
        <form>
        Username:   <input type="text" onChange={(e)=>handleUsername(e)}></input>
        Password:   <input type="password" onChange={(e)=>handlePassword(e)}></input>
        <button onClick={(e)=>handleLogin(e)}>login</button>
       </form>
       </div>
    )
}
export default SigninComponent
