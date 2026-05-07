import { Navbar } from "./components/layouts/Navbar";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;