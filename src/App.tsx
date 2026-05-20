// import { useEffect, useState } from "react";

import { Footer } from "./components/layouts/Footer";
// import Loading from "./components/loading/Loading";
import { Navbar } from "./components/layouts/Navbar";
import { AppRouter } from "./routes/AppRouter";

function App() {

  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);

  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;