const mongoose=require("mongoose")
/*mongoose.connect("mongodb://localhost:27017/BIDBSEP").then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))*/
mongoose.connect(process.env.MONGO_ATLAS_URL).then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))

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