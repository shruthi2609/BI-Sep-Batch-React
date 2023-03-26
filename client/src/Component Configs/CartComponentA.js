function CartComponentA(props){
    return(
        <div>
            {console.log(props)}
            <button onClick={props.increment}>+</button>
            {props.cart}
            <button onClick={props.decrement}>-</button>
        </div>
    )
}
export default CartComponentA