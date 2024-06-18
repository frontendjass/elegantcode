import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <ContactMe />
        </main>
      </header>
    </div>
  );
}

export default App;
