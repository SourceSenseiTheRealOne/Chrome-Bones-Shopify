import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import ShopProvider from "../../context/shopContext";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ShopProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ThemeProvider>
    </ShopProvider>
  );
}

export default MyApp;
