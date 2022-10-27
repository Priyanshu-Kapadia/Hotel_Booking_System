import Booking from "../models/Booking.js";

//CREATE
export const createBooking = async (req, res, next) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};

// DELETE

export const deleteBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    next(err);
  }
};

// GET USER Bookings
export const userBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};

// GET ALL

export const getAllBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};