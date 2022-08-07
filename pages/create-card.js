import CardForm from "../src/components/CardForm";
import useFetch from "../src/hooks/useFetch";
import { getAllCards } from "../src/services/cardsService";
import { useRouter } from "next/router";
import StyledButton from "../src/components/StyledButton";
import Link from "next/link";

export async function getServerSideProps() {
  const cards = await getAllCards();

  return {
    props: {
      cards: cards,
    },
  };
}

export default function CreateCard({ cards }) {
  const router = useRouter();
  const fetchApi = useFetch();

  async function handleSubmit(data) {
    await fetchApi("/api/create", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/");
  }

  return (
    <>
      <h1>Neue Karte anlegen</h1>
      <CardForm onSubmit={handleSubmit} />
      <Link href="/">
        <StyledButton>Back to Board</StyledButton>
      </Link>
    </>
  );
}
