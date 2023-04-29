const router = require("express").Router();
const Form = require("../models/Form");

//Creating form in mongodb database
router.post("/", async(req, res)=>{
    
    const newForm = new Form({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNo: req.body.contactNo,
        qualification: req.body.qualification,
        college: req.body.college,
        branch: req.body.branch,
        totalExperience: req.body.totalExperience,
        jobProfileId: req.body.jobProfileId,
        interestedRole: req.body.interestedRole,
        subscribedJobUpdate: req.body.subscribedJobUpdate,

    });
    try{
     const savedForm = await newForm.save();
     res.status(200).json(savedForm);
    } catch (err) {
     res.status(500).json(err);
    }
    // console.log("data are: "+  JSON.stringify(req.body, undefined, "\t"));
 });

 module.exports = router;