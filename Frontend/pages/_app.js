import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PagesTopLoader } from "nextjs-toploader/pages";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <main>
      <PagesTopLoader height={4} showSpinner={false} color={"#008347"} />

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
