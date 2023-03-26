import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../loginReducer"
import "./LoginComponent.css"
function LoginComponent(){
    const [uname,setUname]=useState("")
    const [email,setEmail]=useState("")
    const [role,setRole]=useState("")

    const dispatch=useDispatch()
    const handleChange=(e,key)=>{
        if(key==="username"){
            setUname(e.target.value)
        }
        if(key==="email"){
            setEmail(e.target.value)
        }
        if(key==="role"){
            setRole(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        //disptach the action
        dispatch(login({username:uname,email:email,role:role}))
    }
    return(
        <div className="container">
            Username:<input type='text' onChange={(e)=>handleChange(e,"username")}></input>
            Email:<input type='text' onChange={(e)=>handleChange(e,"email")}>
            </input>
            Role:<input type='text' onChange={(e)=>handleChange(e,"role")}>
            </input>
            <button onClick={(e)=>handleLogin(e)}>login</button>
        </div>
    )
}
export default LoginComponent