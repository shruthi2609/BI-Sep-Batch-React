const reducer=(cart=0,action)=>{
switch(action.type){
    case 'INCREMENT':
        return cart+1
    case 'DECREMENT':
        return cart-1
}
}
export default reducer