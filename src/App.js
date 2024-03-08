import './App.scss';
import { Routes, Route, useLocation, HashRouter } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Projects from './containers/projects'
import Navbar from './components/navBar';
import ParticleBackground from './utils.js/background';

function App() {
  const location = useLocation();
  const renderParticles = location.pathname === "/";

  return (
    <HashRouter>
    <div className="App">

    {renderParticles && (
        <ParticleBackground/>
    )}

    <Navbar/>

    <div className="App_main-page-content">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/projects' element={<Projects/>}/>
        <Route index path='/resume' element={<Resume/>}/>
      </Routes>
    </div>
    </div>
        
  </HashRouter>
  );
}

export default App;
