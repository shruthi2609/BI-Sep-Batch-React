const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")

router.get("/viewAll",async (req,res)=>{
try{
    const result=await ContactManager.find()
    res.send(JSON.stringify(result))
}
catch(e){
    res.send(JSON.stringify({
        msg:"fetch not successfull",
        reason:e
    }))
}
})



module.exports=router