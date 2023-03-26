const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_ATLAS_URL).then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))


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


