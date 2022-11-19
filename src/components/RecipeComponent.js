import { useParams, Link, Outlet } from 'react-router-dom';
import recipes from '../data/recipes';

// Juice Name webpage with details of juice recipe, img and blurb
//MacBook Air - healtharea.html/juice-name wireframe

function RecipeComponent() {
  const { juiceName } = useParams();
  // console.log(recipes);
  let targetRecipe;
  recipes.forEach((recipe) => {
    // if juice name natches recipe
    if (juiceName === recipe.juiceName) {
      targetRecipe = recipe;
    }
  });

  // iterate through the juiceRecipe obj that creates a list item for each ingredient and its qty in the targetRecipe
  const ingredientListItems = [];
  for (let ingredient in targetRecipe.juiceRecipe) {
    const qty = targetRecipe.juiceRecipe[ingredient];
    ingredientListItems.push(
      <li key={ingredient}>{`${ingredient}: ${qty}`}</li>
    );
  }

  return (
    <section>
      <section>
        <section>
          <h1>{targetRecipe.juiceName}</h1>
          <img
            alt={`${targetRecipe.juiceName} juice - by Sierra`}
            src={targetRecipe.imageSource}
          />
        </section>
        <section>
          <ul>{ingredientListItems}</ul>
        </section>
      </section>
      <section>
        <h4>Potential Health Benefits</h4>
        <p>{targetRecipe.healthBenefits}</p>
      </section>
    </section>
  );
}

export default RecipeComponent;
