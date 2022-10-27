import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    hotel: {
      roomId: {
        type: String,
      },
      adults: {
        type: Number,
      },
      childrens: {
        type: Number,
      },
      rooms: {
        type: Number,
      },
      title: {
        type: String,
        required: true,
      },
    },
    amount: {
      type: Number,
      required: true,
    },

    dates: {
      startDate: { 
        type: Date, 
      },
      endDate: { 
        type: Date, 
      },
    },
    
    transactionId: {
      type: String,
      required: true,
    }
    // status: {
    //     type: String,
    //     default: "pending"
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
