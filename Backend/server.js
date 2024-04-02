const express=require("express")
const app=express()
const cors=require("cors")
const router=require("./Routes")
const databaseconnection=require("./db")
const razorrouter=require("./RazorPay/razorroutes")
const ProductRoute=require("./Routes/Productroutes.js")
require("dotenv").config()
databaseconnection()
/////Middlewares Config.

app.use(express.json())
app.use(cors())
app.use(router)
app.use(razorrouter)
app.use(ProductRoute);

///////Creating the Routes
PORT=process.env.PORT
app.get("/",(req,res)=>{
    res.send("Hello There👋!. Welcome to Capstone. My API is Working")
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})