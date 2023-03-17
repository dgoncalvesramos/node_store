// appRoutes.js
const express = require('express');
const App = require('./appModel');

const router = express.Router();

// Get all apps
router.get('/apps', async (req, res) => {
  try {
    const apps = await App.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new app
router.post('/apps', async (req, res) => {
  const app = new App(req.body);

  try {
    const newApp = await app.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an app
router.put('/:id', async (req, res) => {
  try {
    await App.findByIdAndUpdate(req.params.id, req.body);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an app
router.delete('/:id', async (req, res) => {
  try {
    await App.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

