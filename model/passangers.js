const { Schema, model } = require("mongoose");

const PassangerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    passanger_id: {
      type: String,
      required: true,
    },
    passanger_email: {
      type: String,
      required: true,
    },
    passanger_Place: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
module.exports = model("Passangers", PassangerSchema);
