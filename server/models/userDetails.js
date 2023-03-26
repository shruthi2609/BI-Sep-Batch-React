const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/BIDBSEP").then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))
/*mongoose.connect("mongodb+srv://shruthi:test123@cluster0.rpq7s.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))*/

const userDetails=mongoose.model("userDetails",{
    username:String,
    password:String,
    phone:Number,
    admin:Boolean
})
/*const user=new userDetails({
    username:7987987,
    password:"carry@123",
    phone:2989289,
    admin:false
})
user.save().then((res)=>console.log("user is created")).catch((err)=>console.log(err))*/
module.exports=userDetails


