const express = require('express');
const Role = require('../models/roleModel');
const router = express.Router();

// Get all roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching roles', error });
  }
});

// Create a new role
router.post('/', async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ message: 'Error creating role', error });
  }
});

// Update an existing role
router.put('/:id', async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const role = await Role.findByIdAndUpdate(
      req.params.id,
      { name, permissions },
      { new: true }
    );
    res.json(role);
  } catch (error) {
    res.status(400).json({ message: 'Error updating role', error });
  }
});

// Delete a role
router.delete('/:id', async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting role', error });
  }
});

module.exports = router;
