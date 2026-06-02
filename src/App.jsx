import { useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Terminal from './components/Terminal';
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import EasterEggInput from './components/EasterEggInput';
import CursorGag from './components/CursorGag';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import styles from './App.module.css';

const BOOTED_KEY = 'portfolio_booted';

export default function App() {
  const alreadyBooted = sessionStorage.getItem(BOOTED_KEY) === '1';
  const [booted, setBooted] = useState(alreadyBooted);
  const terminalRef = useRef(null);

  function handleBootDone() {
    sessionStorage.setItem(BOOTED_KEY, '1');
    setBooted(true);
  }

  return (
    <div className={styles.page} ref={terminalRef}>
      <Terminal>
        {!booted
          ? <BootSequence onDone={handleBootDone} />
          : (
            <>
              <Navbar />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </>
          )
        }
      </Terminal>

      {booted && (
        <>
          <EasterEggInput glitchRef={terminalRef} />
          <CursorGag />
        </>
      )}

      <Analytics />
    </div>
  );
}
