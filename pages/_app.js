import Head from "next/head";
import normalize from "normalize.css";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import "./landing.css";
import "./header.css";
import "./travel.css";
import "./rsvp.css";
import "./registry.css";
import "./bend.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
