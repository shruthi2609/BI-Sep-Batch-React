const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")
router.get("/searchbyid",async (req,res)=>{
const search=req.query
console.log("id",search)
try{
    const result=await ContactManager.findById(search.id)
    console.log(result)
    if(result)
    res.send(JSON.stringify(result))
    else
    res.send({
        msg:"contact details not found"
    })
}
catch(e){
    res.send(JSON.stringify({
        msg:"some error occured",
        reason:e
    }))
}
})



module.exports=router