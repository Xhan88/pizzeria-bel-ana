import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "./components/layouts/Footer";
import Loading from "./components/loading/Loading";
import { Navbar } from "./components/layouts/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;