

const express=require("express")
const server=express()
const data=require("./data/users")
server.get("/view",(req,res)=>{
console.log(req)

})

server.get("/getDetails",(req,res)=>{
console.log(req)
const querydata=req.query
const result=data.filter((item)=>item.username===querydata.username&&item.email===querydata.email)
res.status(300).send(JSON.stringify(result))
})

server.get("/getByNumber/:paramNumber",(req,res)=>{
    
    const paramsData=req.params
    console.log(typeof paramsData.paramNumber)
    const result=data.filter((item)=>item.phone===Number(paramsData.paramNumber))
    console.log(result)
    res.status(200).send(JSON.stringify(result))
})
server.listen(3001,()=>console.log("server has started in port no 3001"))