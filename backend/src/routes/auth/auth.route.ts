import { login, logout, register } from "@/controllers/auth/auth.controller";
import { authRateLimiter } from "@/middlewares/limit.middleware";
import { Router } from "express";

const router = Router();

router.post("/register", authRateLimiter, register);
router.post("/login", authRateLimiter, login);
router.post("/logout", logout);

export default router;
