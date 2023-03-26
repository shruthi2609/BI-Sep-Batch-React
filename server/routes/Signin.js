const express=require("express")
const router=express.Router()
const userDetails=require("../models/userDetails")
const OnlineUser=require("../models/dummyModel")
const bcrypt=require("bcrypt")
router.post("/signin",async (req,res)=>{
    const data=req.body
    try{
    const result=await userDetails.findOne({username:data.username})
    if(result){
        if(result.password===data.password){
            res.send("authenticated")
        }
        else{
            res.send("password is not matching") 
        }
    }
    else{
        res.send("this user does not exists")
    }
   
    }
    catch(e){
        res.send("unknown error occured")
    }
   
  
})
router.post("/login",async (req,res)=>{
    const data=req.body
    try{
    const result=await OnlineUser.findOne({email:data.email})
    if(result){
       const compareResult=await bcrypt.compare(data.password,result.password)
       if(compareResult){
        res.send("authenticated")
       }
       else{
        res.send("please check your password")
       }
    }
    else{
        res.send("this user does not exists")
    }
   
    }
    catch(e){
        res.send("unknown error occured")
    }
   
})
module.exports=router
