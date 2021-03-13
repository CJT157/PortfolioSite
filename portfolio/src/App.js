import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
