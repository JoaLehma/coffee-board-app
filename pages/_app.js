import "../styles/globals.css";
import CreateCard from "./create-card";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <CreateCard />
    </>
  );
}

export default MyApp;
