import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import components
import Main from './components/Main';
import About from './components/About';
import Juices from './components/JuicesContainer';
import LogIn from './components/LogInContainer';
import Health from './components/Health';
import HealthArea from './components/HealthArea';
import RecipeComponent from './components/RecipeComponent';

// import styles
import './App.scss';
import logo from './images/logo.png';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className='logo-area'>
            <img src={logo} alt='logo' />
            <p>Match your vision of health with a delicious juice recipe to support your needs. </p>
          </div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/juices'>Juices</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/juices' element={<RecipeComponent />}>
            <Route path=':juiceName' element={<RecipeComponent />} />
          </Route>
          <Route path='/health' element={<HealthArea />}>
            <Route path=':healthArea' element={<HealthArea />} />
          </Route>
          <Route path='/' element={<Main />} />
        </Routes>

        <footer>
          <div>&copy; 2022</div>
          <ul>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/juices'>Juices</Link>
            </li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;
