const express=require("express")
const app=express()
require("dotenv").config()
PORT=process.env.PORT
app.get("/",(req,res)=>{
    res.send("Hello There👋!. Welcome to Capstone. My API is Working")
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})