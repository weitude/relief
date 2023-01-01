import { Router } from "express";
import { Card } from "../models/Card.js";

const router = Router();

router.post("/", async (req, res) => {
  const id = req.body.id;
  const response = req.body.response;

  try {
    const result = await Card.updateOne(
      { id: id },
      { $set: { response: response, replied: true } },
    );
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
});

export default router;
