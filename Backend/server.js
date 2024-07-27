const express=require("express")
const app=express()
const cors=require("cors")
const route=require("./Routes/Routes.js")
const databaseconnection=require("./db")
const razorrouter=require("./RazorPay/razorroutes")
const bodyParser = require('body-parser');

require("dotenv").config()
databaseconnection()
/////Middlewares Config.

app.use(cors())
app.use(bodyParser());
app.use(express.json())
app.use(razorrouter)
app.use(route)

///////Creating the Routes
PORT=process.env.PORT
app.get("/",(req,res)=>{
    res.send("Hello There👋!. Welcome to Capstone. My API is Working")
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})             