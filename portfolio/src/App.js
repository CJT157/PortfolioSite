import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
