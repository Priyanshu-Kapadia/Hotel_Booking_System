import express from "express";
import { createBooking, deleteBooking, getAllBooking, updateBooking, userBooking } from "../controllers/booking.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create a new Booking
router.post("/add", createBooking);

//Update a Booking
router.put("/:id", updateBooking);

//Delete a Booking
router.delete("/:id", verifyAdmin, deleteBooking);

//Get User Booking
router.get("/find/:userId", userBooking);

//Get All Bookings
router.get("/", getAllBooking);

export default router;
