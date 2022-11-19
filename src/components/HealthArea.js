import { useParams, Link, Outlet } from 'react-router-dom';
import healthAreas from '../data/healthAreas.js';
import Juice from './Juice.js';

/*
This component renders when a user clicks on one of the health area components on the home page.
*/
function HealthArea() {
  const { healthArea } = useParams();

  const juiceRecipes = [];
  healthAreas.forEach((area) => {
    if (area.area === healthArea) {
      area.juices.forEach((juice) => {
        const path = '/juices/' + juice.juiceName;
        juiceRecipes.push(
          <li key={juice.juiceName}>
            <Link to={path}>
              <Juice details={juice} />
            </Link>
          </li>
        );
      });
    }
  });

  return (
    <section>
      <ul>{juiceRecipes}</ul>
      <Outlet />
    </section>
  );
}

export default HealthArea;
