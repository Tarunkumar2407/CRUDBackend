import express from "express"
import connectDB from "./db/connectDB.js";
import "dotenv/config";
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"

const app = express();

const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//cors policy
app.use(cors())

//json parser
app.use(express.json())

//connecting database
connectDB(DATABASE_URL)

//loading router
app.use('/user/api', userRoutes)

app.listen(port, () => {
console.log(`Server is running at port ${port}`)
})