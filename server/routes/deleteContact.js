const express=require("express")
const router=express.Router()
const ContactManager=require("../models/ContactManager")
router.get("/deleteContact",async (req,res)=>{
    try{
        const data=req.query
        const result=await ContactManager.deleteOne({fname:data.fname})
        res.send(result)
    }
    catch(e){
        res.send("some error occured")
    }
})

router.get("/deleteById",async (req,res)=>{
    try{
        console.log(req.query)
        const data=req.query
        const result=await ContactManager.findByIdAndDelete(data.id)
        res.send(result)
    }
    catch(e){
        res.send("some error occured")
    }
})
module.exports=router