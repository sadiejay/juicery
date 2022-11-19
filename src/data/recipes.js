// import juice class
import Juice from './JuiceClass.js';

// import images
import logo from '../images/logo.png';
import glowImg from '../images/glow-with-your-gut.JPG';
import heartbeetsImg from '../images/the-5-heartbeets.JPG';
import skinSecretImg from '../images/skin-secret.JPG';
import smoothMoveImg from '../images/smooth-move.JPG';
import meanGreenImg from '../images/mean-green-brain-machine.JPG';

const glow = new Juice('Glow with your Gut');
glow.addNewHealthAreas('Gut');
glow.editRecipeItems({
  celery: '1 head',
  cucumber: '1',
  kale: '1 handful',
  ginger: '1 small thumb',
  orange: '1 peeled, with seeds removed',
});
glow.editHealthBenefits(
  'Glow With Your Gut and enjoy this vibrant, nutrient-packed juice. Celery offers nutrients and compounds which may help protect the entire digestive tract, decrease instances of stomach ulcers, and improve the lining of the stomach. Leafy greens, such as kale, are excellent sources of fiber, as well as nutrients like folate, vitamin C, vitamin K and vitamin A. Leafy greens also contain a specific type of sugar that helps fuel growth of healthy gut bacteria. The oranges in this juice sweeten up the deal as a fruit with less fructose, making them easier to tolerate and less likely to cause gas. Ginger is a star in this show. Gingerol, a natural component of ginger root, benefits gastrointestinal motility ― the rate at which food exits the stomach and continues along the digestive process.'
);
glow.addImage(glowImg);

const heartbeets = new Juice('The 5 Heartbeets');
heartbeets.addNewHealthAreas('Heart');
heartbeets.editRecipeItems({
  celery: '1 head',
  cucumber: '1',
  beets: '3',
  cranberries: '2 cups',
  grapes: '1 cup',
  tumeric: '1 small piece',
  apples: 'small gree, cored and sliced',
  pepper:
    'black, sprinkled in after juice for better absorption and activiation of the tumeric',
});

heartbeets.editHealthBenefits(
  'Let your heart lead the way with this beautiful juice. Celery has anti-hypertensive properties due to naturally occurring compounds called phthalides. These relax the tissues of the artery walls to increase blood flow and reduce blood pressure. Beets have properties which can lower blood pressure. Cranberry juice is a natural source of polyphenols, which have been shown to help reduce the risk of heart disease. A study has shown red grape juice provides protection from oxidized LDL cholesterol, which can cause hardened arteries.  With its ability to help reduce inflammation and oxidation, turmeric could lower the risk of heart disease. Listen to your heart when it’s telling you to sip on this!'
);
heartbeets.addImage(heartbeetsImg);

const brain = new Juice('Mean Green Brain Machine');
brain.addNewHealthAreas('Brain');
brain.editRecipeItems({
  celery: '1 head',
  cucumber: '2',
  lemongrass: '1 piece',
  spinach: '3 large handfuls',
  apples: '2 green',
  limes: '2 with seeds removed',
});
brain.editHealthBenefits(
  'This gorgeous green juice contains spinach which is a leafy green that is rich in brain-healthy nutrients like vitamin K, lutein, folate, and beta carotene which may slow cognitive decline. The Mean Green Brain Machine also features lime which is rich in Vitamin C and helps prevent brain cells from becoming damaged and supports overall brain health. Bolster your brain health with this tasty juice!'
);
brain.addImage(meanGreenImg);

const colon = new Juice('Smooth Move');
colon.addNewHealthAreas('Colon', 'Gut');
colon.editRecipeItems({
  apple: '1',
  lemon: '1',
  ginger: '1 thumb',
  beets: '3',
  spinach: '3 large handfuls',
  celery: '1 head',
});

colon.editHealthBenefits(
  "Colon health is vital to your body’s overall wellbeing. The colon is a major organ essential for waste removal in the body. If the colon is not working properly, the body can't absorb essential nutrients or rid itself of waste. This juice supports your colon to be the best it can be with benefits such as phytochemicals and antioxidants which are believed to prevent or slow cell damage caused by free radicals – the unstable waste molecules your body produces that can cause diseases. Treating yourself with this juice is a smooth move!"
);
colon.addImage(smoothMoveImg);

const skin = new Juice('Skin Secret');
skin.addNewHealthAreas('Skin');
skin.editRecipeItems({
  cucumber: '1',
  mint: 'handful',
  apples: '2 small green, cored and sliced',
  lemon: '2 , peeled with seeds removed',
});
skin.editHealthBenefits(
  "Enjoy clear skin from within with the Skin Secret juice. This refreshing juice features cucumber which is known for its hydrating and anti-inflammatory qualities. Mint is known for its anti-bacterial and anti-inflammatory properties which could help ward off acne. Lemons are rich in Vitamin C and may help prevent free radicals that can damage collagen, leaving you with smoother skin. Apples boast a rich vitamin content including vitamins A, C, as well as zinc, which are compounds thought to promote clear, healthy skin. Drink this juice when you want folks to wonder… “What's their Skin Secret?!”"
);
skin.addImage(skinSecretImg);

const recipes = [glow, heartbeets, brain, colon, skin];

export default recipes;
