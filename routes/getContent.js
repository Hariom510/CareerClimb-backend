const router = require("express").Router();
const Content = require("../models/Content");

router.get('/', async (req, res) => {
    try {
      // Use the model to find all data in the database
      const allData = await Content.find();
      res.status(200).json(allData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Error fetching data.' });
    }
  });

  module.exports = router;