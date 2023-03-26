const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")
router.get("/updatePhone",async (req,res)=>{
    const data=req.query
    try{
        const result=await ContactManager.updateOne({fname:data.fname},{phone:data.uphone})
        console.log(result)
        res.send(result)
    }
    catch(e){
        res.send("not updated")
    }
})
module.exports=router