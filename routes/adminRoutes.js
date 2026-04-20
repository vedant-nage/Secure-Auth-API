import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import authorizeRole from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only admin can access
router.get("/users", authMiddleware, authorizeRole("admin"), (req, res) => {
  res.json({ msg: "Welcome Admin! You can see all users." });
});

export default router;