const express=require("express")
const router=express.Router()

router.get("/viewTodos",(req,res)=>{
    res.send("todos list")
})

router.get("/getTodoById",(req,res)=>{
    res.send("todo by ID")
})

module.exports=router

