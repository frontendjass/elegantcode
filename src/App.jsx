import Services from './components/Services';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (

          <Loader />

      ) : (
        <div className='overflow-x-hidden'>
          <header>
            <Navbar />
            <main>
              <Hero />
              <Services />
              <Portfolio />
              <ContactMe />
            </main>
            <Footer />
          </header>
        </div>
      )}
    </>
  );
}

export default App;
