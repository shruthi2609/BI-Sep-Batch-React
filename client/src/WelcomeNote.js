import UserProfile from "./UserProfile"
function WelcomeNote(props){
    return(
       
        <div>
            {console.log(props.username,props.role)}
        <UserProfile username={props.username} role={props.role}></UserProfile>
        <h1>Hello {props.username} ! Good morning ! </h1>
        </div>
    )
}
export default WelcomeNote
