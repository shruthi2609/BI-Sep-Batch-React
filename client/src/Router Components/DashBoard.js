import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
function DashBoardComponent(){
    const params=useParams()
    const navigate=useNavigate()
    const [search,setSearch]=useState("")
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        navigate(`/search?searchkeyword=${search}&id=shdkjhsdjhs`)
    }
    return(
        <div>
            {console.log(useParams())}
            <h1>Welcome {params.username}! </h1>
            Search News:<input type="text" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
        </div>
    )
}
export default DashBoardComponent