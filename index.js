const express = require("express");
const dotenv = require("dotenv");
const connectDB =require("./config/connectDB")
const userRoute =require("./routes/userRoute");
const morgan = require("morgan");

const app = express();
dotenv.config();
connectDB();

//middleware
app.use("/users", userRoute)
app.use(morgan("dev"))
 app.use("/users", userRoute)


 
app.get("/",(req, res) =>{
    res.send("Welcome to our school portal")
})



const PORT =process.env.PORT ||5000

app.listen(PORT,() => 
     console.log(`server is running on ${PORT}`))
