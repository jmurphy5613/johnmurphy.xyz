import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Route element={ <Home /> } path="/" />
    </Router>
  );
}

export default App;
