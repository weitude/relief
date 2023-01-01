import { Router } from "express";
import healthRoute from "./routes/health.js";
import opencardRoute from "./routes/opencard.js";
import postcardRoute from "./routes/postcard.js";
import promoteRoute from "./routes/promote.js";
import replyRoute from "./routes/reply.js";
import searchRoute from "./routes/search.js";
import signupRoute from "./routes/signup.js";
import signinRoute from "./routes/signin.js";

const router = Router();

router.use("/health", healthRoute);
router.use("/signin", signinRoute);
router.use("/signup", signupRoute);
router.use("/opencard", opencardRoute);
router.use("/postcard", postcardRoute);
router.use("/promote", promoteRoute);
router.use("/reply", replyRoute);
router.use("/search", searchRoute);

export default router;
