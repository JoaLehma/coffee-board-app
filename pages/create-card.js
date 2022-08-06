import CardForm from "../src/components/CardForm";
import { useFetch } from "../src/hooks/useFetch";
import { getAllCards } from "../src/services/cardsService";
import Card from "../src/models/cardModel";

export default function CreateCard() {
  return <CardForm />;
}
