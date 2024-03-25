import './App.scss';
import About from './sections/About';
import BentoBox from './sections/BentoBox';
import Checklist from './sections/Checklist';
import Landing from './sections/Landing';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="App">
      <div className="side-nav">
      </div>
      <div className="content">
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
