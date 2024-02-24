import { MoviesProvider } from "../context/MoviesContext";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <MoviesProvider>
      <Component {...pageProps} />
    </MoviesProvider>
  );
}
