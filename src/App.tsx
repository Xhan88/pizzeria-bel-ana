import { Footer } from "./components/layouts/Footer";
import { Navbar } from "./components/layouts/Navbar";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;