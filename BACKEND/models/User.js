const { default: mongoose, Schema } = require("mongoose")

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.Now
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;