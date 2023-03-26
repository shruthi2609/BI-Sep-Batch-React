function UserProfile(props){
   /* let login={
        loginTime:"20:36",
        loginDate:"21/01"
    }*/
    let loginTime="21/01/2023 08:36"
    return(
        <div>
            <h2>Name:{props.username}</h2>
            <p>Role: {props.role}</p>
            <h3>Last Login :{loginTime}</h3>
        </div>
    )
}
export default UserProfile