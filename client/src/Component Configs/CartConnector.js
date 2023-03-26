import { connect } from "react-redux";
import CartComponentA from "./CartComponentA";
import { increment,decrement} from "../Action/ActionFile";

const mapStatetoProps=(state)=>{
return {
    cart:state
}
}
const mapDispatchToProps=(dispatch)=>{
return{
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
}
}

export default connect(mapStatetoProps,mapDispatchToProps)(CartComponentA)
