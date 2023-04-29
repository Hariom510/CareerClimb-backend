const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const formRoute = require("./routes/forms");

const path = require("path");
const PORT = process.env.PORT || 5000

dotenv.config(); 
app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    autoIndex: true,

}).then(()=>{
    console.log("Successfully connected to mongodb");
}).catch((err)=>{
    console.log(err);
})


app.use("/api/forms", formRoute);

app.listen(PORT, ()=>{
    console.log("Backend is running on 5000.");
})
