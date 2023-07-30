const router = require("express").Router();
const Content = require("../models/Content");


// router.post('/', async (req, res) => {
//     const { imageLink, textData } = req.body;
  
//     try {
//       // Create a new data instance based on the model
//       const newData = new Content({ imageLink, textData });
      
//       // Save the data to the database
//       await newData.save();
  
//       res.status(200).json({ message: 'Data saved successfully!' });
//     } catch (error) {
//       console.error('Error saving data:', error);
//       res.status(500).json({ message: 'Error saving data.' });
//     }
//   });


router.post('/', async (req, res) => {
    const dataArray = req.body; // Assuming the request body contains an array of data objects
  
    try {
      const promises = dataArray.map(async (data) => {
        const { imageLink, textData } = data;
        // Create a new data instance based on the model
        const newData = new Content({ imageLink, textData });
        // Save the data to the database
        await newData.save();
      });
  
      // Wait for all promises to resolve before sending the response
      await Promise.all(promises);
  
      res.status(200).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data.' });
    }
  });

module.exports = router;