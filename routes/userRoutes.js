import express from "express"
import UserController from "../controllers/userController.js"

const router = express.Router()

router.post('/register', UserController.userRegister)
router.get("/getdata", UserController.getData)
router.get("/getuser/:id", UserController.getUser)
router.patch("/updateuser/:id", UserController.updateUser)
router.delete("/deleteuser/:id", UserController.deleteUser)

export default router