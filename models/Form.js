const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    totalExperience: {
        type: String,
        required: true,
    },
    jobProfileId: {
        type: String,
        required: true,
    },
    interestedRole: {
        type: String,
        required: true,
    },
    subscribedJobUpdate: {
        type: Boolean,
        default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);