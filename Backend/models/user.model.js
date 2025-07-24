const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    company:String,
    address:String,
    website:String,
    avatar:String,
})

module.exports=mongoose.model('User',userSchema)