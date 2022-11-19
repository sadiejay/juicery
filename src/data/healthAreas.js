// import class
import HealthArea from './HealthAreaClass.js';

// import images
import gut from '../images/gut-icon.jpeg';
import heart from '../images/heart-icon.jpg';
import skin from '../images/skin-icon.jpg';
import brain from '../images/brain-icon.jpg';
import colon from '../images/colon-icon.jpg';

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
