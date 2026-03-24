import express from "express";
import { body } from "express-validator";
import { User } from "../models/user.js";
import {signup, login} from "../controllers/auth.js";

const router = express.Router();

router.put("/signup", [
  body("email")
    .isEmail().withMessage("Please enter a valid email")
    .custom(async (value) => {
      const userDoc = await User.findOne({ email: value });
      if (userDoc) {
        throw new Error('E-mail address already exists');
      }
    })
    .normalizeEmail(),
    body("password").trim().isLength({min: 5}),
    body("name").trim().not().isEmpty()
], signup);

router.post("/login", login);

export default router;