const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    imageLink: {
        type: String,
        required: true,
    },
    textData: {
        type: String,
        required: true,
    },
    },
    { timestamps: true }
  );

 module.exports = mongoose.model("Content", ContentSchema);