import mongoose from "mongoose"
import "dotenv/config"

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: process.env.DB_NAME
         }
         await mongoose.connect(DATABASE_URL,DB_OPTIONS)
         return console.log("Connected Successfully")
    } catch (error) {
        console.log("Error in connecting")
    }
}

export default connectDB