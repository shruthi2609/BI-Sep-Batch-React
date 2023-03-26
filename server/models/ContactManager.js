const mongoose=require("mongoose")
/*mongoose.connect("mongodb://localhost:27017/BIDBSEP").then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))*/
mongoose.connect("mongodb+srv://shruthi:test123@cluster0.rpq7s.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))

const ContactManager=mongoose.model("ContactManager",{
   fname:{
    type:String,
    required:true,
    unique:true
   },
   phone:{
    type:Number,
    required:true,
   },
   email:{
    type:String,
    required:true,
    unique:true
   }
})
module.exports=ContactManager