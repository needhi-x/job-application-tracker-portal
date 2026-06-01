import express from "express";
import Job from "../models/Job.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// GET JOBS (USER ONLY)
router.get("/", verifyToken, async (req, res) => {
  const jobs = await Job.find({ userId: req.user.id });
  res.json(jobs);
});

// ADD JOB
router.post("/add", verifyToken, async (req, res) => {
  const job = await Job.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(job);
});

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.json(job);
});

// DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;