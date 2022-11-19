import { useParams, Link, Outlet } from 'react-router-dom';
import recipes from '../data/recipes';
import './RecipeComponent.scss';

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
    <section className='targetRecipeComp'>
      <section className='targetRecipeSection'>
        <section className='targetRecipeCard'>
          <h3>{targetRecipe.juiceName}</h3>
          <img
            alt={`${targetRecipe.juiceName} juice - by Sierra`}
            src={targetRecipe.imageSource}
          />
        </section>
        <section className='ingredientList'>
          <ul>{ingredientListItems}</ul>
        </section>
      </section>
      <section className='healthBenefits'>
        <h4>Potential Health Benefits</h4>
        <p>{targetRecipe.healthBenefits}</p>
      </section>
    </section>
  );
}

export default RecipeComponent;
