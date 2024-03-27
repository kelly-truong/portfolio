import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './App.scss';
import About from './sections/About';
import BentoBox from './sections/BentoBox';
import Checklist from './sections/Checklist';
import Landing from './sections/Landing';
import Projects from './sections/Projects';
import Loading from './components/Loading';
import Canvas from './components/Canvas';

function App() {
  const navigate = useNavigate();
  const [init, setInit] = useState(true)
  const [animate, setAnimate] = useState(null)
  const aboutRef = useRef(null);

  const options = {
    rootMargin: '-100px',
  }

  useEffect(() => {
    setTimeout(() => {
      setInit(false)
    }, 4444)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true)
      }
    }, options)

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.disconnect()
      }
    }
  }, [aboutRef])


  return (
    <div className="App">
      {<Loading init={init} />}
      <Canvas />
      <div className="side-nav">
      </div>
      <div className={"content background--custom" + (init ? " content-inactive" : " content-active")}>
        <Landing />
        <About aboutRef={aboutRef} animate={animate} />
        <Checklist />
        <BentoBox />
        <Projects />
      </div>
    </div>
  );
}

export default App;
