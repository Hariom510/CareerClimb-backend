const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const formRoute = require("./routes/forms");
const contentRoute = require("./routes/content");
const getContentRoute = require("./routes/getContent");

const path = require("path");
const PORT = process.env.PORT || 5000

const cors  = require("cors");

const corsOptions ={
      origin:'https://careerclimb.netlify.app',  
    // origin:'https://my-application-form.netlify.app',  
    // origin:'http://localhost:3000',    
    credentials:true, 
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

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
app.use("/api/content", contentRoute);
app.use("/api/getcontent", getContentRoute);

app.listen(PORT, ()=>{
    console.log("Backend is running on 5000.");
})
