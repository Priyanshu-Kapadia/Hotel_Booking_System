import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a new Room
router.post("/:hotelid", verifyAdmin, createRoom);

//Update a Room
router.put("/:id", verifyAdmin, updateRoom);

//Delete a Room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//Get a Room
router.get("/:id", getRoom);

//Get All Rooms
router.get("/", getAllRoom);

export default router;
