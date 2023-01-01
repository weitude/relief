import { Router } from "express";
import crypto from "crypto";
import { Card } from "../models/Card.js";

const router = Router();

router.post("/", async (req, res) => {
  let id;
  const title = req.body.title;
  const question = req.body.question;
  const tags = [...req.body.tags, "others"];
  while (1) {
    id = crypto.randomInt(100000000, 1000000000).toString();
    const ret = await Card.findOne({
      id: id,
    });
    if (!ret) break;
  }
  try {
    const result = await Card.create({
      title: title,
      question: question,
      response: "",
      tags: tags,
      replied: false,
      id: id,
    });
    res.json({ message: "success", content: result, type: 1 });
  } catch (e) {
    res.json({ message: "error", content: [], type: 0 });
  }
});

export default router;
