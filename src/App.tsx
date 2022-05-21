import './App.css';

function App() {
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
        </h1>
        
      </div>
    </div>
  );
}

export default App;
