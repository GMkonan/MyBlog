// pages/_app.js
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}