import { useState } from "react";
function ContactManager(){
    const [contacts,setContact]=useState([
        {
            fname:"john",
            phone:9238923823,
            email:"john@gmail.com"
        },
        {
            fname:"peter",
            phone:9238923824,
            email:"peter@gmail.com"
        }
    ])
    const [firstname,setFname]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const handleInput=(e,keyword)=>{
        if(keyword==="fname"){
            setFname(e.target.value)
        }
        else if(keyword==="phn"){
            setPhone(e.target.value)
        }
        else{
            setEmail(e.target.value)
        }
    }
    const addContact=(e)=>{
        e.preventDefault()
      /*  contacts.push({
            fname:firstname,
            phone:phone,
            email:email
        })*/
        /**
         * setContact({
            fname:firstname,
            phone:phone,
            email:email
        })
         */
        setContact([...contacts,{
            fname:firstname,
            phone:phone,
            email:email
        }])
        console.log(contacts)
    }
    return(
        <div>
            {/*console.log(firstname,email,phone)*/}
            <form>
                Firstname:<input type='text' onChange={(e)=>handleInput(e,"fname")}></input>
                Phone:<input type='text' onChange={(e)=>handleInput(e,"phn")}></input>
                Email:<input type='text' onChange={(e)=>handleInput(e,"eml")}></input>
                <button onClick={(e)=>addContact(e)}>add contact</button>
            </form>
            {
                contacts.map((item)=>(
                    <div>
                        <h1>Firstname:{item.fname}</h1>
                        <h2>phone:{item.phone}</h2>
                        <h3>Email:{item.email}</h3>
                    </div>
                ))
            }
        </div>

    )
}
export default ContactManager