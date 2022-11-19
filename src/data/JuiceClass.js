/* 
This file creates a 'Juice' class. Each instance of Juice will have several properties
  - juiceName - 'string'
  - healthAreas - an object whose properties are the health areas with a value of 'true'
  - juiceRecipe - Array of objects whose properties are ingredientNames and values are the quantities of those ingredients
  - healthBenefits - a 'string' that includes the paragraph describing potential health benefits

To create a new Juice, invoke the Juice function and pass in a string with the 'juiceName' and assign it a label:
  const glow = new Juice('GLOW with your Gut');

To change the juice name, invoke the changeName method on the juice you've created:
  glow.changeName('Glow with your Gut');

To add health areas to the Juice, invoke the addNewHealthAreas method on the juice you've created, and pass in however many health areas you want to add:
  glow.addNewHealthAreas('Gut Health', 'Brain Health');

To remove a health area from the Juice, invoke the removeHealthAreas method on the juice you've created, and pass in the areas you want to remove as strings:
  glow.removeHealthAreas('Brain Health');

To add or edit recipe ingredients to the Juice, invoke the editRecipeItems method on the juice you've created, and pass in an object whose properties are the ingredient names and whose values are the ingredient qtys that you want to add or edit:
  glow.editRecipeItems({
      celery: '1 head',
      cucumber: '1',
      kale: '1 handful',
      ginger: '1 small thumb',
      orange: '1 peeled, with seeds removed',
    })

To add or edit health benefits, keep in mind you will have to overwrite existing health benefits (copy & paste as needed!). Invoke the editHealthBenefits method and pass in a string that includes the paragraph that you want to appear as potential health benefits:
  glow.editHealthBenefits(
    'Glow With Your Gut and enjoy this vibrant, nutrient-packed juice. Celery offers nutrients and compounds which may help protect the entire digestive tract, decrease instances of stomach ulcers, and improve the lining of the stomach. Leafy greens, such as kale, are excellent sources of fiber, as well as nutrients like folate, vitamin C, vitamin K and vitamin A. Leafy greens also contain a specific type of sugar that helps fuel growth of healthy gut bacteria. The oranges in this juice sweeten up the deal as a fruit with less fructose, making them easier to tolerate and less likely to cause gas. Ginger is a star in this show. Gingerol, a natural component of ginger root, benefits gastrointestinal motility ― the rate at which food exits the stomach and continues along the digestive process.'
  );

To see the contents of the your Juice you've created at any time in the console, console.log the label you've given it:
  console.log(glow);

*/

function Juice(juiceName) {
  this.juiceName = juiceName;
  this.healthAreas = {};
  this.juiceRecipe = {};
  this.healthBenefits = '';
  this.imageSource = null;
}

Juice.prototype.changeName = function (newName) {
  if (typeof newName !== 'string') {
    return console.log('please enter a valid string');
  } else {
    this.juiceName = newName;
    return console.log(`new juice name: ${this.juiceName}`);
  }
};

Juice.prototype.addNewHealthAreas = function (...healthAreas) {
  // for each argument healthArea, if it isn't already included in the health areas array, add it
  const newHealthAreas = healthAreas;
  newHealthAreas.forEach((healthArea) => {
    if (!this.healthAreas[healthArea]) this.healthAreas[healthArea] = true;
  });
  return this.healthAreas;
};

Juice.prototype.removeHealthAreas = function (...healthAreas) {
  // for each argument healthArea, if it's included in the object, delete it
  healthAreas.forEach((healthArea) => {
    if (this.healthAreas[healthArea]) delete this.healthAreas[healthArea];
  });
  return this.healthAreas;
};

// input: an object with each recipe item name as a property, whose value is the qty required of that property, example: { carrots: 5, beets: 2, ginger: 3 }
Juice.prototype.editRecipeItems = function (recipeItems) {
  // for each recipeItem passed in, add it (or update it) in the existing juiceRecipe object
  for (let item in recipeItems) {
    this.juiceRecipe[item] = recipeItems[item];
  }
  return this.juiceRecipe;
};

Juice.prototype.editHealthBenefits = function (healthBenefitsDescription) {
  this.healthBenefits = healthBenefitsDescription;
  return this.healthBenefits;
};

Juice.prototype.addImage = function (image) {
  this.imageSource = image;
};

module.exports = Juice;
