import express from "express";
import {
  countByCity,
  countByType,
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
router.put("/find/:id", verifyAdmin, updateHotel);

//Delete a hotel
router.delete("/find/:id", verifyAdmin, deleteHotel);

//Get a hotel
router.get("/find/:id", getHotel);

//Get All hotels
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


export default router;
