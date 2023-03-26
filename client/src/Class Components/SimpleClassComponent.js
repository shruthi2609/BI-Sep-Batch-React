import React from "react"
class SimpleClassComponent extends React.Component{
    constructor(props){
       super(props)
       this.sample="this is a js varibale"
    }
   
    changeData(){
        console.log("func is hit")
        this.sample="new data"
        console.log("changed data",this.sample)
    }
    render(){
        const {data}=this.props
       console.log("sample",this.sample)
        return(
            <div>
               <h1>Simeple class component {data}</h1>
               <h2>Demo:{this.sample}</h2>
               <button onClick={()=>this.changeData()}>change</button>
            </div>
        )
    }
}
export default SimpleClassComponent