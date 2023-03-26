import { useSearchParams } from "react-router-dom"

function SearchComponent(){
   const [querydata]=useSearchParams()
   const searchItem=querydata.get("searchkeyword")
   const id=querydata.get("id")
    return(
        <div>
            {console.log(id)}
            <h1>You have searched for :{searchItem}</h1>
        </div>
    )
}
export default SearchComponent