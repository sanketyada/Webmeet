import {User} from "../models/user.models.js"
import httpStatus from "http-status"
import bcrypt, { hash } from 'bcrypt'

const register = async(req,res)=>{
 const {name,username,password} = req.body;
 try {
    const existUser  = await User.find({username})
    if(existUser){
        return res.status(httpStatus.FOUND).send({message:"User Exist!"})
    }
    
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = await User.create({
        name:name,
        username:username,
        password:hashedPassword
    })

    await newUser.save();
    res.status(httpStatus.CREATED).send({message:"User get Ragistered"})



 } catch (error) {
    res.json({message:`Somthing went Wrong ${error}`})
 }
}
export {register}