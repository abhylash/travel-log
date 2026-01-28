const express = require("express");
const Travel = require("../models/Travel");

const router = express.Router();

// Add travel experience
router.post("/", async (req, res) => {
  await Travel.create(req.body);
  res.json({ message: "Travel experience added" });
});

// Get all travel experiences
router.get("/", async (req, res) => {
  const travels = await Travel.find();
  res.json(travels);
});

module.exports = router;
