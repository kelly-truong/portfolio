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
      <div className={"content" + (init ? " content-inactive" : "")}>
        <Landing />
        <About />
        <Checklist />
        <BentoBox />
        <Projects />
      </div>
    </div>
  );
}

export default App;
