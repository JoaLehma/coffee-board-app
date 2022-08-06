import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
