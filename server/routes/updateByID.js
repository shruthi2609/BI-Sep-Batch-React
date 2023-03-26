const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")
router.get("/updateById",async (req,res)=>{
    try{
        const data=req.query
        const result=await ContactManager.findByIdAndUpdate(data.id,{phone:data.uphone,email:data.uemail})
        console.log(result)
        res.send(result)
    }
    catch(e){
        console.log(e)
        res.send("some error occured")
    }
})
module.exports=router