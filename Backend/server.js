const express=require("express")
const app=express()
const cors=require("cors")
const router=require("./Routes")
require("dotenv").config()

/////Middlewares Config.

app.use(express.json())
app.use(cors())
app.use(router)

///////Creating the Routes
PORT=process.env.PORT
app.get("/",(req,res)=>{
    res.send("Hello There👋!. Welcome to Capstone. My API is Working")
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})