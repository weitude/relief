import { Router } from "express";
import { sha256 } from "js-sha256";
import { User } from "../models/User.js";

const router = Router();

router.get("/", async (req, res) => {
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

export default router;
