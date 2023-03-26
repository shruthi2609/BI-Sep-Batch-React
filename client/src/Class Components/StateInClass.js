import React from "react";
class StateInClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            demo:"old data",
            username:"john"
        }
    }
    changeData(){
        console.log("func is hit")
       this.setState({demo:"new data"})
    }
    render(){
        console.log("render is called",this.state.demo)
        return(
            <div>
                <h1>States</h1>
                <h2>Data:{this.state.demo}</h2>
                <p>Username:{this.state.username}</p>
                <button onClick={()=>this.changeData()}>change</button>
            </div>
        )
    }
}
export default StateInClass