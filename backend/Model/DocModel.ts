import { Schema, model, Types } from "mongoose";
const DocuSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Link_Url: {
    type: String,
    required: true,
  },
  Author: {
    type: Types.ObjectId,
    ref: "User",
  },
  Viewers: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  Editors: [{ type: Types.ObjectId, ref: "User" }],
});

module.exports = model("Document", DocuSchema);
