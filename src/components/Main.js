import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

// import components
import Health from './Health';
import Info from './Info';

// import data
import areas from '../data/healthAreas.js';

// import styles
import '../App.scss';

/*
This component is rendered by the App component, it includes:
  - a nav bar
  - a search bar
  - a list of health components, that users can click on
  - an info section
  - a footer
*/
function Main() {
  // initialize State with healthAreas, and info content
  const [healthAreas, setHealthAreas] = useState(areas);

  // iterates through healthAreas and make a Linked Health component for each area of health
  const healthComponents = [];
  healthAreas.forEach((healthArea, i) => {
    const path = '/health/' + healthArea.area;
    healthComponents.push(
      <li key={healthArea.area}>
        <Link to={path}>
          <Health
            imageSource={healthArea.img}
            healthArea={healthArea.area}
            juices={healthArea.juices}
          />
        </Link>
      </li>
    );
  });

  return (
    <div className='home'>
      <div className='custom-search'>
        <input type='text' placeholder='Search..' />
      </div>
      <div className='health-card-section'>
        <ul>{healthComponents}</ul>
        <Outlet />
      </div>
      <div className='info-section'>
        <Info />
      </div>
    </div>
  );
}

export default Main;
