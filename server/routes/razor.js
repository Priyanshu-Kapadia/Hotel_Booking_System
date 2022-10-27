import express from "express";
import { paymentBooking } from "../controllers/razor.js";

const router = express.Router();

//Create a new Room
router.post("/payment", paymentBooking);

export default router;