import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
        </main>
      </header>
    </div>
  );
}

export default App;
