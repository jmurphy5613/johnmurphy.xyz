import '../App.css';


const Projects = () => {
    return (
        <div className="App">
            <img src="/github.png" className="github" />
            <div className="main-content">
            <h4 className="back">{`<- Home`}</h4>
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

export default Projects;