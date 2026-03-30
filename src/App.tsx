/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Industries from './components/Industries';
import Advantages from './components/Advantages';
import Infrastructure from './components/Infrastructure';
import Connectivity from './components/Connectivity';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-50 selection:bg-orange-500/30">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Leadership />
          <Industries />
          <Advantages />
          <Infrastructure />
          <Connectivity />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
