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

  const options = {
    rootMargin: '-100px',
  }

  useEffect(() => {
    setTimeout(() => {
      setInit(false)
    }, 4444)
  }, [])


  return (
    <div className="App">
      {<Loading init={init} />}
      <Canvas />
      <div className="side-nav">
      </div>
      <div className={"content background--custom" + (init ? " content-inactive" : " content-active")}>
        <Landing init={init} />
        <section />
        <About />
        <Projects />
        <Checklist />
      </div>
    </div>
  );
}

export default App;
