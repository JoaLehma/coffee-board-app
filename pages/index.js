import Head from "next/head";
import { useRouter } from "next/router";
import StyledButton from "../src/components/StyledButton";
import Link from "next/link";

export default function Home() {
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
      </main>
    </div>
  );
}
