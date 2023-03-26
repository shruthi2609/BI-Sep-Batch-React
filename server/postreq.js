const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
server.post("/login",bp.json(),(req,res)=>{
console.log(req)
res.send("dummy")
})

server.post("/signup",(req,res)=>{
    console.log(req)
    res.send("signup successfull")
})
server.listen(3001,()=>console.log("server has started in port no :3001"))