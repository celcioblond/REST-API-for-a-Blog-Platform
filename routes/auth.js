import express from "express";
import { body } from "express-validator";
import { User } from "../models/user.js";
import {signup} from "../controllers/auth.js";

const router = express.Router();

router.put("/signup", [
  body("email")
    .isEmail().withMessage("Please enter a valid email")
    .custom(async (value, { req }) => {
      try {
        const userDoc = await User.findOne({ email: value });
        if (userDoc) {
          throw new Error('E-mail address already exists');
        }
      } catch (err) {
        throw new Error('Database error occurred');
      }
    })
    .normalizeEmail(),
    body("password").trim().isLength({min: 5}),
    body("name").trim().not().isEmpty()
], signup);

export default router;