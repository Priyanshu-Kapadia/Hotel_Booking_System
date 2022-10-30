import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a new hotel
router.post("/", createHotel);

//Update a hotel
router.put("/find/:id", updateHotel);

//Delete a hotel
router.delete("/:id", deleteHotel);

//Get a hotel
router.get("/:id", getHotel);

//Get All hotels
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
