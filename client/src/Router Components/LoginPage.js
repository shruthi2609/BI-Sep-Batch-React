import { useState } from "react"
import {useNavigate} from "react-router-dom"
function LoginPage(){
    const [uname,setUname]=useState("")

    const navigate=useNavigate()
    const [password,setPassword]=useState("")
    const [flag,setFlag]=useState(false)
    const [msg,setMsg]=useState("")
    const getCredentials=(e,keyword)=>{
        if(keyword==="username"){
            setUname(e.target.value)
        }
        if(keyword==="pword"){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        if(password==="admin123"){
            setFlag(true)
        }
        else{
            setFlag(false)
            setMsg("invalid credentials")
        }
    }
    return(
        <div>
            <form>
                Username:<input type="text" onChange={(e)=>getCredentials
                (e,"username")}></input>
                Password:<input type="password" onChange={(e)=>getCredentials
                (e,"pword")}></input>
                <button onClick={(e)=>handleLogin(e)}>login</button>
                {
                    flag?navigate(`/dashboard/${uname}/hsjhdsdhksdh`):<h1>{msg}</h1>
                }

            </form>
        </div>
    )
}
export default LoginPage