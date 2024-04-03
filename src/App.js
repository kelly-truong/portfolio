import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './App.scss';
import About from './sections/About';
import BentoBox from './sections/BentoBox';
import Gallery from './sections/Gallery';
import Landing from './sections/Landing';
import Projects from './sections/Projects';
import Loading from './components/Loading';
import Canvas from './components/Canvas';
import { useIntersectionObserver } from './components/useIntersectionObserver';

const options = {
  threshold: .8
}

function App() {
  const navigate = useNavigate();
  const [containerRef, isVisible] = useIntersectionObserver(options);
  const [init, setInit] = useState(true)
  const [currentSection, setCurrentSection] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setInit(false)
      setCurrentSection(0)
    }, 4444)

  }, [])

  useEffect(() => {
    if (isVisible[0] === "landing") {
      setCurrentSection(0)
    } else if (isVisible[0] && isVisible[0] === "about") {
      setCurrentSection(1)
    } else if (isVisible[0] === "projects") {
      setCurrentSection(2)
    } else if (isVisible[0] === "gallery") {
      setCurrentSection(3)
    }
  }, [isVisible])


  //Play inital animation && scroll out transitions when its the current section.
  //Else 
  return (
    <div className="App">
      {<Loading init={init} />}
      <Canvas />
      <div className="side-nav">
      </div>
      <div className={"content background--custom" + (init ? " content-inactive" : " content-active")}>
        <Landing id={0} init={init} currentSection={currentSection} containerRef={containerRef} />
        <About id={1} containerRef={containerRef} currentSection={currentSection} />
        <section style={{ height: "20dvh" }} />
        <Projects id={2} containerRef={containerRef} currentSection={currentSection} />
        <section style={{ height: "20dvh" }} />
        <Gallery id={3} containerRef={containerRef} currentSection={currentSection} />
      </div>
    </div>
  );
}

export default App;
