import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a new hotel
router.post("/", verifyAdmin, createHotel);

//Update a hotel
router.put("/:id", verifyAdmin, updateHotel);

//Delete a hotel
router.delete("/:id", verifyAdmin, deleteHotel);

//Get a hotel
router.get("/:id", getHotel);

//Get All hotels
router.get("/", getAllHotel);

export default router;
