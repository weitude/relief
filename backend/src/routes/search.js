import { Router } from "express";
import { Card } from "../models/Card.js";

const router = Router();

router.get("/", async (req, res) => {
  let target = req.query.target;
  let tags = req.query.tags;
  if (tags === undefined) tags = [];
  const isReply = req.query.isReply;

  try {
    if (tags.length === 0) tags = ["others"];
    if (target.length === 0) target = ".";

    const result = await Card.find({
      $and: [
        {
          $or: [
            { title: { $regex: target } },
            { question: { $regex: target } },
            { response: { $regex: target } },
          ],
        },
        { tags: { $in: tags } },
        { replied: isReply },
      ],
    }).sort({ createdAt: -1 });
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
});

export default router;
