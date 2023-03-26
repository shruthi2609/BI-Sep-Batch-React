import { Link } from "react-router-dom"
function BaseComponent(){
    return(
        <div>
             <Link to="/home">Home Page</Link>
            <Link to="/login">Login Page</Link>
            <Link to="/dashboard">DashBoard</Link>
        </div>
    )
}
export default BaseComponent