import mongoose from "mongoose"

//defining schema 
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, requires: true},
    mobile: {type: Number, required: true},
    jobrole: {type: String, required: true},
    address: {type: String, required: true},
    description: {type: String, required: true}

})

//creating model 
const userModel = new mongoose.model("user", userSchema)

export default userModel
