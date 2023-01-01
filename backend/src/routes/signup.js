import { Router } from "express";
import { sha256 } from "js-sha256";
import { User } from "../models/User.js";

const router = Router();

router.post("/", async (req, res) => {
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

export default router;
