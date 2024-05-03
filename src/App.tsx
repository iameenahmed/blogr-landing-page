import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import StateOfArt from "./components/StateOfArt";

const App = () => {
  return (
    <div className="font-Overpass">
      <Header />
      <main>
        <Hero />
        <Intro />
        <StateOfArt />
        <Features />
      </main>
      <Footer />
    </div>
  );
};
export default App;
