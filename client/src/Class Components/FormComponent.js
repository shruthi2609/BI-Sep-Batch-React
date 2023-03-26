import React from "react"
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uname:"",
            password:"",
            flag:false,
            msg:""
        }
    }
    handleUsername=(e)=>{
        //console.log(e.target.value)
        this.setState({uname:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleLogin=(e)=>{
        e.preventDefault()
       if(this.state.uname==="john"&&this.state.password==="admin"){
       this.setState({flag:true,msg:"login is successfull"})
    
       }
       else{
        this.setState({flag:false,msg:"login is invalid"})
       }
    }
    render(){
        console.log("render is called")
        return(
            <div>
                <form>
                 Username:   <input type="text" onChange={(e)=>this.handleUsername(e)}></input>
                 Password:   <input type="password" onChange={(e)=>this.handlePassword(e)}></input>
                 <button onClick={(e)=>this.handleLogin(e)}>login</button>
                </form>
                {
                    this.state.flag?<div>
                        <h1>{this.state.msg}</h1>
                        </div>:<>
                        <h1>{this.state.msg}</h1></>
                }
            </div>
        )
    }
}
export default FormComponent