const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")
router.post("/createContact",async (req,res)=>{
const data=req.body
const contact=new ContactManager({
    fname:data.fname,
    phone:data.phone,
    email:data.email
})
try{
    await contact.save()
    res.send(JSON.stringify({
        msg:"create",
        status:true,

    }))
}
catch(e){
    console.log(e)
    res.send(JSON.stringify({
        msg:"error in creating contact",
        status:false
    }))
}
})
module.exports=router