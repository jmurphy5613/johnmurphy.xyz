import './App.css';
import ThreeScene from './threejs/three.scene';
import Typed from 'react-typed';
import { useState } from 'react';

function App() {

  const [inProjects, setInProjects] = useState(false);

  if(inProjects) {
    return (
      <div className="App">
        <ThreeScene />
        <div className="main-content">
          <h1> 
            <h3>Web3 Projects</h3>
            <div className="project-container" style={{ backgroundImage: 'url(/azol.png)' }}>
            </div>
            <div className="project-container" style={{ backgroundImage: 'url(/bb.png)'}}>
            </div>
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <ThreeScene />
      <div className="main-content">
        <h1> 
          
          <h3>
            Hey there, I'm John.
            
          </h3>
          I'm a passionate 
          <Typed style={{ margin: '0 0 1rem 0'  }} typeSpeed={90} backSpeed={50} backDelay={10} loop strings={['full stack developer', 'web3 engineer', 'blockchain developer']} />
          <h4>I'm currently a developer at Landkit, a software company that creates algorithmic solutions to landscaping projects</h4>
          <button className="projects-button" onClick={e => { console.log(inProjects); setInProjects(true) }}>View Projects</button>
        </h1>
      </div>
    </div>
  );
}

export default App;
