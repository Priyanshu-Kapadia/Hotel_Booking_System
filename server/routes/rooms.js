import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a new Room
router.post("/:hotelid", createRoom);

//Update a Room
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//Delete a Room
router.delete("/:id/:hotelid", deleteRoom);

//Get a Room
router.get("/:id", getRoom);

//Get All Rooms
router.get("/", getAllRoom);

export default router;
