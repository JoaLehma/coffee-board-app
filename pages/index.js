import Head from "next/head";
import { useRouter } from "next/router";
import StyledButton from "../src/components/StyledButton";
import Link from "next/link";
import StyledCard from "../src/components/Card";
import { getAllCards } from "../src/services/cardsService";
import { CardAuthor, CardText } from "../src/components/StyledCard";

export async function getStaticProps() {
  const cards = await getAllCards();

  console.log(cards);

  return {
    props: { cards },
  };
}

export default function Home({ cards }) {
  return (
    <div>
      <Head>
        <title>Lean Coffee App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Lean Coffee Board</h1>
        <Link href="/create-card">
          <StyledButton>Add new Card</StyledButton>
        </Link>
        {cards.map((card) => {
          return (
            <StyledCard key={card.id}>
              <CardAuthor>{card.author}</CardAuthor>
              <CardText>{card.content}</CardText>
            </StyledCard>
          );
        })}
        <StyledCard />
      </main>
    </div>
  );
}
