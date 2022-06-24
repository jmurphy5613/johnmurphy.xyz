import './App.css';
import ThreeScene from './threejs/three.scene';
import Typed from 'react-typed';
import { useState } from 'react';
import Popup from 'reactjs-popup';

function App() {

  const [page, setPage] = useState('home');

  // if(page == 'web2projects') {
  //   return (
  //     <div className="App">
  //       <ThreeScene />
  //       <img src="/github.png" className="github" />
  //       <h4 className="back" onClick={e => setPage('web3projects')}>{`<- Web3 Projects`}</h4>
  //       <div className="main-content">
  //         <h1>
  //           <h3 className="projects-title">Web2 Projects</h3>
  //         </h1>
  //       </div>

  //     </div>
  //   )
  // }

  if(page == 'web3projects') {
    return (
      <div className="App">
        <ThreeScene />
        <img src="/github.png" className="github" />
        <div className="main-content">
          <h4 className="back" onClick={e => setPage('home')}>{`<- Home`}</h4>
          {/* <h4 className="foward" onClick={e => setPage('web2projects')}>{`Web2 Projects ->`}</h4> */}
          <h1>
            <h3 className="projects-title">Web3 Projects</h3>
            <div className="project-container" style={{ backgroundImage: 'url(/azol.png)' }}>
              <div className="overlay">
                <h3>Azol.io</h3>
              </div>
            </div>

            <div className="project-container" style={{ backgroundImage: 'url(/bb.png)' }}>
              <div className="overlay">
                <h3>Billionaire Battles</h3>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <ThreeScene />
      <a href="https://github.com/jmurphy5613">
        <img src="/github.png" className="github" />
      </a>

      <div className="main-content">
        <h1>
          <h3>
            Hey there, I'm John.
          </h3>
          I'm a passionate 
          <Typed style={{ margin: '0 0 1rem 0'  }} typeSpeed={90} backSpeed={50} backDelay={10} loop strings={['full stack developer', 'web3 engineer', 'blockchain developer']} />
          <h4>I'm currently a developer at Landkit, a software company that creates algorithmic solutions to landscaping projects</h4>
          <button className="projects-button" onClick={e => { setPage('web3projects') }}>View Projects</button>
        </h1>
      </div>
    </div>
  );
}

export default App;
