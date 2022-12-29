import express from "express";
import crypto from "crypto";
import { sha256 } from "js-sha256";
import { Base64 } from "js-base64";
import { User } from "../models/User.js";
import { Card } from "../models/Card.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const hash = sha256(password);

  const result = await User.find({ name: name });

  if (result.length >= 1) {
    res.json({ message: "Username exist", type: 2 });
    return;
  }
  try {
    await User.create({ name: name, email: email, hash: hash, role: role });
    res.json({ message: "success", type: 1 });
  } catch (e) {
    res.json({ message: "error", type: 0 });
  }
});

router.get("/signin", async (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  const hash = sha256(password);
  const result = await User.find({ name: name });

  if (result.length === 1) {
    if (result[0].hash === hash)
      res.json({ message: "success", content: result, type: 1 });
    else res.json({ message: "Wrong password", content: [], type: 2 });
  } else if (result.length > 1) {
    res.json({ message: "really?", content: [], type: 3 });
  } else {
    res.json({ message: "Can't find user", content: [], type: 0 });
  }
});

router.post("/postcard", async (req, res) => {
  const buf = crypto.randomBytes(8);
  const id = Base64.encode(buf.toString());
  const title = req.body.title;
  const question = req.body.question;
  const tag = [...req.body.tag, "others"];

  try {
    const result = await Card.create({
      title: title,
      question: question,
      response: "",
      tag: tag,
      replied: false,
      id: id,
    });
    res.json({ message: "success", content: result, type: 1 });
  } catch (e) {
    res.json({ message: "error", content: [], type: 0 });
  }
});

router.post("/reply", async (req, res) => {
  const id = req.body.id;
  const response = req.body.response;

  try {
    const result = await Card.updateOne(
      { id: id },
      { $set: { response: response, replied: true } }
    );
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
});

router.get("/opencard", async (req, res) => {
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

router.post("/promote", async (req, res) => {
  const name = req.body.name;

  try {
    await User.updateOne({ name: name }, { $set: { role: "admin" } });

    res.json({ message: "success", type: 1 });
  } catch {
    res.json({ message: "error", type: 0 });
  }
});

router.get("/search", async (req, res) => {
  let target = req.query.target;
  let tag = req.query.tag;
  if (tag === undefined) tag = [];
  const isReply = req.query.isReply;

  try {
    if (tag.length === 0) tag = ["others"];
    if (target.length === 0) target = ".";

    const result = await Card.find({
      $and: [
        {
          $or: [
            { title: { $regex: ".*" + target + "*." } },
            { tag: { $in: tag } },
          ],
        },
        { replied: isReply },
      ],
    }).sort("created_at");

    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
});

router.get("/health", (_, res) => {
  res.send("<h1>NTU Relief health check</h1>");
});

export default router;
