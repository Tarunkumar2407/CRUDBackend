import userModel from "../models/userSchema.js";

class UserController {
    // user registration 
    static userRegister = async (req, res) => {
         const {name, email, age, mobile, jobrole, address, description } = req.body
         const user = await userModel.findOne({email: email})
         if(user){
           res.status(422).json({"status": "Failed", "message": "Email already exist"})
         }else{
            if(name && email && age && mobile && jobrole && address &&   description){
                try {
                    const newUser = new userModel({
                        name: name,
                        email: email,
                        age: age,
                        mobile: mobile,
                        jobrole: jobrole,
                        address: address,
                        description: description
                    })
                    await newUser.save()
                    res.status(201).json(newUser)
                    console.log(newUser)
                } catch (error) {
                    res.status(422).json({"status": "failed", "message": "Unable to register"})
                }
            }else{
                res.status(422).json({"status": "Failed", "message": "All fields are required"})
            }
         }
    }

    static getData = async (req, res) => {
        try {
            const userData = await userModel.find()
        res.status(201).json(userData)
        console.log(userData)
        } catch (error) {
            res.status(422).json("Error in getting All data")
        }
    }

    static getUser = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.status(201).json(user)
            console.log(user)
        } catch (error) {
            res.status(422).json("error in geting user by id")
        }
    }

    static updateUser = async (req, res) => {
        try {
            const newUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(201).json(newUser)
        } catch (error) {
            res.status(422).json("Error in Updating User")
        }
    }

    static deleteUser = async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.status(201).json(user)
        } catch (error) {
            res.status(422).json("Error in Deleting User")
        }
    }
}

export default UserController