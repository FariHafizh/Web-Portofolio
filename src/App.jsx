import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { initLegacyPortfolioDom } from './legacyDom';

export default function App() {
  useEffect(() => {
    initLegacyPortfolioDom();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div id="content">
          <Home />
          <Experience />
          <Portofolio />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
