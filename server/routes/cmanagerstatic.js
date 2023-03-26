const express=require("express")
const router=express.Router()
const data=require("../data/users")

router.get("/getContacts",(req,res)=>{
    console.log(req)
    const querydata=req.query
    const result=data.filter((item)=>item.username===querydata.username&&item.email===querydata.email)
    res.status(300).send(JSON.stringify(result))
    })


module.exports=router