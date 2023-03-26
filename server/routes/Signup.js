const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const userDetails=require("../models/userDetails")
const OnlineUser=require("../models/dummyModel")
router.post("/signup",(req,res)=>{
    const data=req.body
    console.log(data)
    const user=new userDetails({
        username:data.username,
        password:data.password,
        phone:data.phone,
        admin:data.admin
    })
    user.save().then((success)=>res.send(JSON.stringify({
        "msg":" successfull",
        "status":true
    }))).then((err)=>res.send(JSON.stringify({
        "msg":"not successfull",
        "err":err
    })))
   
})
router.post("/register",async (req,res)=>{
    const data=req.body
    console.log(data)
    const encryptedPW=await bcrypt.hash(data.password,7)
    console.log(encryptedPW)
    const user=new OnlineUser({
        email:data.email,
      password:encryptedPW,
      age:data.age,
      country:data.country,
      technology:data.technology
    })
    user.save().then((success)=>res.send(JSON.stringify({
        "msg":" successfull",
        "status":true
    }))).then((err)=>res.send(JSON.stringify({
        "msg":"not successfull",
        "err":err
    })))
   
})
module.exports=router