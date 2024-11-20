const express = require('express');
const Permission = require('../models/permissionModel');
const router = express.Router();

// Get all permissions
router.get('/', async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching permissions', error });
  }
});

// Create a new permission
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const permission = new Permission({ name, description });
    await permission.save();
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ message: 'Error creating permission', error });
  }
});

// Update an existing permission
router.put('/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    const permission = await Permission.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    res.json(permission);
  } catch (error) {
    res.status(400).json({ message: 'Error updating permission', error });
  }
});

// Delete a permission
router.delete('/:id', async (req, res) => {
  try {
    await Permission.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting permission', error });
  }
});

module.exports = router;
