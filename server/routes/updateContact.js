const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")
router.get("/updateContact",async (req,res)=>{
    try{
        const data=req.query
        console.log(data)
        const result=await ContactManager.updateOne({fname:data.fname},{phone:data.uphone,email:data.uemail})
        res.send(result)
    }
    catch(e){
        res.send("some error occured")
    }
})
module.exports=router