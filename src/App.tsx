import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#05060A] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Precision Desktop Magnetic Cursor */}
        <CustomCursor />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Journey />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
