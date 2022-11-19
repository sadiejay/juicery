// import class
import HealthArea from './HealthAreaClass.js';

// import images
import gut from '../images/gut.jpg';
import heart from '../images/heart.jpg';
import skin from '../images/skin.jpg';
import brain from '../images/brain.png';
import colon from '../images/colon.jpeg';

// imports juice recipes to match recipes with health areas
import juices from './recipes.js';

const gutHealth = new HealthArea('Gut', gut);
const heartHealth = new HealthArea('Heart', heart);
const skinHealth = new HealthArea('Skin', skin);
const colonHealth = new HealthArea('Colon', colon);
const brainHealth = new HealthArea('Brain', brain);

const healthAreas = [
  gutHealth,
  heartHealth,
  skinHealth,
  colonHealth,
  brainHealth,
];

healthAreas.forEach((area) => {
  area.addJuices(juices);
});

export default healthAreas;
