import { dbConnect } from "../../src/dbConnect";
import Card from "../models/cardModel";

export async function getAllCards() {
  await dbConnect();

  const cards = await Card.find();

  return cards.map(({ id, author, content }) => {
    return { id, author, content };
  });
}

export async function getCardById(id_) {
  await dbConnect();

  const card = await Card.findById(id_);

  const { id, author, content } = category;

  return { id, author, content };
}
