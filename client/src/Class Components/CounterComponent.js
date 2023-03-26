import React from "react";
class CounterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
      
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
            <button onClick={()=>this.increment()}>+</button>
            {this.state.count}
            <button onClick={()=>this.decrement()}>-</button>
            </div>
        )
    }
}
export default CounterComponent