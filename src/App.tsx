import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import StateOfArt from "./components/StateOfArt";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <StateOfArt />
        <Features />
      </main>
      <Footer />
    </div>
  );
};
export default App;
