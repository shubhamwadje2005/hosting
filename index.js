const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())// 👈 stores body to req.body
app.use(cors({ origin: "https://localhost:5173", credentials: true })) // CORS

//                    call this 👇 if url has http://localhost:5000/api/blog
app.use("/api/blog", require("./blog.route"))
app.use = ("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
mongoose.connect(process.env.MONGO_URL)

// once mongoose connects to mongodb👇 call this function
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running"))
})