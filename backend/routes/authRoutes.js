import express from "express";
import { register, login } from "../controllers/authController.js";
import { refreshAccessToken } from "../controllers/authController.js";
import { logout } from "../controllers/authController.js";
const router = express.Router();
import { body } from "express-validator";

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  register
);
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logout);

export default router;