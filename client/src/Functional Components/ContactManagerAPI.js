import { useEffect, useState } from "react"
import axios from "axios"
function ContactManagerAPI(){
    const [contacts,setContact]=useState([])
    const [searchResults,setSearchResults]=useState([])
    const [firstname,setFname]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [flag,setFlag]=useState(false)
    const [search,setSearch]=useState("")
  /*  const callAPI=()=>{
      /*  fetch("http://localhost:3001/contactApp").then((res)=>{return res.json()}).then((res)=>setContact(res)).catch((err)=>console.log(err))
        axios.get("http://localhost:3001/contactApp").then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    }*/
    useEffect(()=>{
        axios.get(`http://localhost:${process.env.PORT}/viewAll`).then((res)=>setContact(res.data)).catch((err)=>console.log(err))
    },[flag])
   
    const handleInput=(e,keyword)=>{
        if(keyword==="fname"){
            setFname(e.target.value)
        }
        else if(keyword==="phn"){
            setPhone(e.target.value)
        }
        else if(keyword==="search"){
            setSearch(e.target.value)
        }
        else{
            setEmail(e.target.value)
        }
    }
    const addContact=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:${process.env.PORT}/createContact`,{
            "fname":firstname,
            "phone":phone,
            "email":email
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
        setFlag(!flag)
     
    }
    const deleteContact=(e,id)=>{
        e.preventDefault()
        axios.get(`http://localhost:${process.env.PORT}/deleteById?id=${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
        setFlag(!flag)
    }
    const searchContact=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:${process.env.PORT}/search?fname=${search}`).then((res)=>setSearchResults(res.data)).catch((err)=>console.log(err))
    }
    return(
        <div>
            <form>
            Search Contact:
            <input type='text' onChange={(e)=>handleInput(e,"search")}></input>
            <button onClick={(e)=>searchContact(e)}>search</button>
            {
                searchResults.map((item)=>(
                    <>
                   
                    <h1>{item.fname}</h1>
                    <h2>{item.email}</h2>
                    <h2>{item.phone}</h2>
                    
                    </>

                ))
            }
            <br/>
                Firstname:<input type='text' onChange={(e)=>handleInput(e,"fname")}></input>
                Phone:<input type='text' onChange={(e)=>handleInput(e,"phn")}></input>
                Email:<input type='text' onChange={(e)=>handleInput(e,"eml")}></input>
                <button onClick={(e)=>addContact(e)}>add contact</button>
              
            </form>
           
            {
                contacts.map((item)=>(
                    <>
                    {console.log(item._id)}
                    <h1>{item.fname}</h1>
                    <h2>{item.email}</h2>
                    <h2>{item.phone}</h2>
                    <button onClick={(e)=>deleteContact(e,item._id)}>delete</button>
                    </>

                ))
            }
        </div>

    )
}
export default ContactManagerAPI