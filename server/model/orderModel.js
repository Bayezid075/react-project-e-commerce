const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    orderItems: [
      {
        type: String,
        required: true,
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAdress: {
      adress: { type: String, required: true },
      Distict: { type: String, required: true },
      subDist: { type: String, required: true },
      village: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      updateTime: { type: String },
      emailAdress: { type: String },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    texPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: String,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
      required: true,
    },
    isDelivered: {
      type: Date,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const orderModel = mongoose.model("orderInfo", orderSchema);
module.exports = orderModel;
