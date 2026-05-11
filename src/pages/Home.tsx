import { AboutSection } from "../components/layouts/AboutSection";
import { FavoritePizzas } from "../components/layouts/FavoritePizzas";
import { Features } from "../components/layouts/Features";
import { Hero } from "../components/layouts/Hero";


export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FavoritePizzas />
      <AboutSection />

    </>
  );
};