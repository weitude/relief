import { Router } from "express";
import { Card } from "../models/Card.js";

const router = Router();

router.get("/", async (req, res) => {
  const isAdmin = req.query.isAdmin;
  const id = req.query.id;

  try {
    const result = await Card.findOne({ id: id });
    if (result.replied === false && !isAdmin)
      res.json({ message: "error", content: [], type: 2 });
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
});

export default router;
