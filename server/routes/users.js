import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// // Here I am just checking my custom token Middleware for each role
// router.get("/checkauthentication", verifyToken ,(req, res, next) => {
//     res.send("You are authenticated");
// })

// router.get("/checkuser/:id", verifyUser,(req, res, next) => {
//     res.send("Hello User, You are authenticated and you can delete your account");
// })

// router.get("/checkadmin/:id", verifyAdmin,(req, res, next) => {
//     res.send("Hello Admin, You are authenticated and you can delete all account");
// })

//Update a User
router.put("/:id", verifyUser, updateUser);

//Delete a User
router.delete("/:id", verifyUser, deleteUser);

//Get a User
router.get("/:id", verifyUser, getUser);

//Get All Users
router.get("/", verifyAdmin, getAllUser);

export default router;
