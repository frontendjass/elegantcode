import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
        <main>
          <Hero />
          <Services />
        </main>
      </header>
    </div>
  );
}

export default App;
