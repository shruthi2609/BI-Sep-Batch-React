const mongoose=require("mongoose")
const { Schema } = mongoose;
mongoose.connect(process.env.MONGO_ATLAS_URL).then((res)=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed",err))

const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"this user already exists"],
        unique:true
    },
    password:{
        type:String,
        required:true
    },
  /*  phone:{
        validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          }
    },*/
    age:{
        type:Number,
        min:[18,"underage"],
        max:[60,"age limit exceeded"]
    },
    country:{
        type:String
    },
    technology:{
        type:[String],
        required:true,
        enum:["HTML","CSS","React","JS"]
    }
})
const OnlineUser=mongoose.model("OnlineUser",UserSchema)
/*const user1=new OnlineUser({
  email:"ram@gmail.com",
    password:"ram@123",
    age:18,
    country:"IND",
    technology:["React","JS"]
})
user1.save().then((res)=>console.log(res)).catch((err)=>console.log(err))
const user2=new OnlineUser({
    email:"jenny@gmail.com",
      password:"jenny@123",
      age:25,
      country:"US",
      technology:["React","JS"]
  })
  user1.save().then((res)=>console.log(res)).catch((err)=>console.log(err))
  const user3=new OnlineUser({
    email:"danny@gmail.com",
      password:"danny@123",
      age:45,
      country:"US",
      technology:["JS"]
  })
  user3.save().then((res)=>console.log(res)).catch((err)=>console.log(err))
  const user4=new OnlineUser({
    email:"swapna@gmail.com",
      password:"swapna@123",
      age:30,
      country:"US",
      technology:["React","HTML"]
  })
  user4.save().then((res)=>console.log(res)).catch((err)=>console.log(err))
  const user2=new OnlineUser({
    email:"jenny@gmail.com",
      password:"jenny@123",
      age:25,
      country:"US",
      technology:["Angular","JS"]
  })
  user2.save().then((res)=>console.log(res)).catch((err)=>console.log(err))*/
  /*queries
  OnlineUser.find({"country":"US","age":22}).then((res)=>console.log(res)).catch((err)=>console.log(err))
 OnlineUser.find({$and:[{"country":"US"},{"age":22}]}).then((res)=>console.log(res)).catch((err)=>console.log(err))
 OnlineUser.find({$or:[{"country":"US"},{"age":22}]}).then((res)=>console.log(res)).catch((err)=>console.log(err))
 OnlineUser.find({age:{$gte:25}}).then((res)=>console.log(res)).catch((err)=>console.log(err))
 OnlineUser.find({age:{$gte:25,$lt:30}}).then((res)=>console.log(res)).catch((err)=>console.log(err))
  OnlineUser.find({country:{$ne:"US"}}).then((res)=>console.log(res)).catch((err)=>console.log(err))
  OnlineUser.find({country:{$eq:"US"}}).then((res)=>console.log(res)).catch((err)=>console.log(err))


   OnlineUser.find({country:{$in:["US","IND","UK"]}}).then((res)=>console.log(res.length)).catch((err)=>console.log(err))
   OnlineUser.find({country:{$in:["US","IND","UK"]}}).count().then((res)=>console.log(res)).catch((err)=>console.log(err))
   //1 for ascending
   OnlineUser.find({country:{$in:["US","IND","UK"]}}).sort({age:1}).then((res)=>console.log(res)).catch((err)=>console.log(err))
   //-1 for descending
   OnlineUser.find({country:{$in:["US","IND","UK"]}}).sort({age:-1}).then((res)=>console.log(res)).catch((err)=>console.log(err))
      OnlineUser.find({country:{$in:["US","IND","UK"]}}).limit(2).then((res)=>console.log(res)).catch((err)=>console.log(err))
      //projection 0 - not includes
      //projection 1 - includes
       OnlineUser.find({country:{$in:["US","IND","UK"]}}).select({password:0}).then((res)=>console.log(res)).catch((err)=>console.log(err))
OnlineUser.find({country:{$in:["US","IND","UK"]}}).select({email:1,age:1,_id:0}).then((res)=>console.log(res)).catch((err)=>console.log(err))

 OnlineUser.updateOne({email:"danny@gmail.com"},{country:"UK"}).then((res)=>console.log(res)).catch((err)=>console.log(err))
 OnlineUser.updateMany({age:{$gte:25}},{country:"MiddleEast"}).then((res)=>console.log(res)).catch((err)=>console.log(err))
 
 //update on a file - check this
  OnlineUser.updateMany({$set:{
  "age":30
 }}).then((res)=>console.log(res)).catch((err)=>console.log(err))
  */


 
       

     

   

  


  

 
 

module.exports=OnlineUser