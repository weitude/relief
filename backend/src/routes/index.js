import express from "express";
import crypto from "crypto";
import { sha256 } from "js-sha256";
import { Base64 } from "js-base64";
import { User } from "../models/User.js";
import { Card } from "../models/Card.js";

const router = express.Router();

const CreateUser = async (res, name, email, hash, role) => {
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
};

const Login = async (res, name, hash) => {
  const result = await User.find({ name: name });

  if (result.length === 1) {
    console.log(hash);
    if (result[0].hash === hash)
      res.json({ message: "success", content: result, type: 1 });
    else res.json({ message: "Wrong password", content: [], type: 2 });
  } else if (result.length > 1) {
    res.json({ message: "really?", content: [], type: 3 });
  } else {
    res.json({ message: "Can't find user", content: [], type: 0 });
  }
};

const PostCard = async (res, title, question, tag, id) => {
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
};

const Reply = async (res, id, response) => {
  try {
    const result = await Card.updateOne(
      { id: id },
      { $set: { response: response, replied: true } }
    );
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
};

const SearchByID = async (res, id) => {
  try {
    const result = await Card.findOne({ id: id });
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
};

const Init = async (res) => {
  try {
    const result = await Card.find({}).limit(66).sort("created_at");

    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
};

const Pormote = async (res, name) => {
  try {
    await User.updateOne({ name: name }, { $set: { role: "admin" } });

    res.json({ message: "success", type: 1 });
  } catch {
    res.json({ message: "error", type: 0 });
  }
};

const SearchCard = async (res, target, tag, isreply) => {
  try {
    if (tag.length == 0) tag = ["others"];
    if (target.length == 0) target = ".";

    const result = await Card.find({
      $and: [
        {
          $or: [
            { title: { $regex: ".*" + target + "*." } },
            { tag: { $in: tag } },
          ],
        },
        { replied: isreply },
      ],
    }).sort("created_at");

    console.log(result);
    res.json({ message: "success", content: result, type: 1 });
  } catch {
    res.json({ message: "error", content: [], type: 0 });
  }
};

router.post("/signup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  const hash = sha256(password);

  CreateUser(res, name, email, hash, role);
});

router.get("/signin", (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  console.log(password);

  const hash = sha256(password);

  Login(res, name, hash);
});

router.post("/postcard", (req, res) => {
  const buf = crypto.randomBytes(8);
  const id = Base64.encode(buf);

  const title = req.body.title;
  const question = req.body.question;
  const tag = [...req.body.tag, "others"];

  PostCard(res, title, question, tag, id);
});

router.post("/reply", (req, res) => {
  const id = req.body.id;
  const response = req.body.response;

  Reply(res, id, response);
});

router.get("/opencard", (req, res) => {
  const id = req.body.id;
  SearchByID(res, id);
});

router.get("/init", (req, res) => {
  Init(res);
});

router.post("/promote", (req, res) => {
  const name = req.body.name;
  Pormote(res, name);
});

router.get("/search", (req, res) => {
  const target = req.query.target;
  let tag = req.query.tag;
  if (tag === undefined) tag = [];
  const isreply = req.query.isreply;

  SearchCard(res, target, tag, isreply);
});

router.get("/health", (_, res) => {
  res.send("<h1>NTU Relief health check</h1>");
});

export default router;
