import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Page from "../components/shared/Page";
function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
