const express = require('express');
const PostQuest = require('./models/PostQuest');
const router = express.Router();

// Create a new quest
router.post('/api/user/quests', async (req, res) => {
  try {
    const quest = new PostQuest(req.body);
    const savedQuest = await quest.save();
    res.status(201).json(savedQuest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all quests
router.get('/api/user/quests', async (req, res) => {
  try {
    const quests = await PostQuest.find().populate('createdBy', 'firstName lastName');
    res.status(200).json(quests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
