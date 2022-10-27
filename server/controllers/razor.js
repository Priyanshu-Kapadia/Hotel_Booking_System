import shortid from "shortid";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "rzp_test_8Ivs9mo9wHlcFk",
  key_secret: "AQv1bXsoaSYXAznY3dFGah9v",
});

export const paymentBooking = async (req, res, next) => {
  const payment_capture = 1;
  const amount = req.body.amount;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    next(error);
  }
};
