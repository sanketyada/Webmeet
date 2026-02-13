import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

const User = model("User",userSchema)
export {User}