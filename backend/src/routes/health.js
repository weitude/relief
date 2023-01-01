import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("<h1>NTU Relief health check</h1>");
});

export default router;
