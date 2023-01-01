import { Router } from "express";
import { User } from "../models/User.js";

const router = Router();

router.post("/", async (req, res) => {
  const name = req.body.name;
  try {
    await User.updateOne({ name: name }, { $set: { role: "admin" } });
    res.json({ message: "success", type: 1 });
  } catch {
    res.json({ message: "error", type: 0 });
  }
});

export default router;
