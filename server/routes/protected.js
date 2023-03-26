const express=require("express")
const router=express.Router()
const authenticate=require("../middleware/authenticate")
router.post("/update",authenticate,(req,res)=>{
    res.send("this is protected route, you are allowed")
})
module.exports=router