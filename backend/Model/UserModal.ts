import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema({
  Email: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
  },
  Profile: {
    type: String,
    default: "",
  },
  Documents: [
    {
      type: Types.ObjectId,
      ref: "DocModel",
    },
  ],
});

module.exports = model("User", UserSchema);
